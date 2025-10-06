-- Phase 1: Update Bookings Table RLS Policies

-- Drop the existing permissive insert policy
DROP POLICY IF EXISTS "Allow booking creation" ON public.bookings;

-- Create new INSERT policy with validation
CREATE POLICY "Allow public booking creation with validation" ON public.bookings
FOR INSERT 
WITH CHECK (
  full_name IS NOT NULL AND 
  email_address IS NOT NULL AND 
  phone_number IS NOT NULL AND
  length(full_name) > 2 AND 
  length(full_name) < 100 AND
  email_address ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- Add explicit UPDATE policy (prevent modifications)
CREATE POLICY "Prevent booking updates" ON public.bookings
FOR UPDATE 
USING (false);

-- Add explicit DELETE policy (prevent deletions)
CREATE POLICY "Prevent booking deletions" ON public.bookings
FOR DELETE 
USING (false);

-- Phase 2: Create Leads Table

CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email_address text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  source text DEFAULT 'website',
  CONSTRAINT leads_full_name_length CHECK (length(full_name) >= 2 AND length(full_name) <= 100),
  CONSTRAINT leads_email_format CHECK (email_address ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT leads_message_length CHECK (length(message) >= 10 AND length(message) <= 2000)
);

-- Enable RLS on leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public to insert leads
CREATE POLICY "Allow public lead submission" ON public.leads
FOR INSERT 
WITH CHECK (true);

-- Prevent reading leads (only admins should see these)
CREATE POLICY "Prevent public lead reading" ON public.leads
FOR SELECT 
USING (false);

-- Prevent updates
CREATE POLICY "Prevent lead updates" ON public.leads
FOR UPDATE 
USING (false);

-- Prevent deletions
CREATE POLICY "Prevent lead deletions" ON public.leads
FOR DELETE 
USING (false);

-- Phase 3: Add Database Trigger for Auto-generated Confirmation Numbers

CREATE OR REPLACE FUNCTION generate_booking_confirmation()
RETURNS TRIGGER AS $$
BEGIN
  -- Generate confirmation number if not provided
  IF NEW.confirmation_number IS NULL OR NEW.confirmation_number = '' THEN
    NEW.confirmation_number := 'MELA-' || floor(random() * 1000000000)::text;
  END IF;
  
  -- Generate 6-character PIN if not provided
  IF NEW.confirmation_pin IS NULL OR NEW.confirmation_pin = '' THEN
    NEW.confirmation_pin := upper(substr(md5(random()::text), 1, 6));
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER set_booking_confirmation
BEFORE INSERT ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION generate_booking_confirmation();