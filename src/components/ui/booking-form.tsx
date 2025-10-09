import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  fullName: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  address: z.string()
    .trim()
    .min(5, { message: "Address must be at least 5 characters" })
    .max(200, { message: "Address must be less than 200 characters" }),
  selectedService: z.string().min(1, { message: "Please select a service" }),
  preferredDate: z.date({ message: "Please select a date" })
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function BookingForm({ isOpen, onClose, preselectedService }: BookingFormProps) {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  const selectedDate = watch("preferredDate");

  const onSubmit = async (data: BookingFormData) => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "A preferred date is required for booking.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const bookingData = {
        timestamp: new Date().toISOString(),
        fullName: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        address: data.address.trim(),
        preferredDate: format(date, "yyyy-MM-dd"),
        selectedService: data.selectedService,
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw2Udm7oggA6cBsd8NO564kG2iVSwQuorRTFC7iQqLNsV5hMRerpdhLGKapl1fHa5zW/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      // Note: no-cors mode doesn't return response, so we assume success
      toast({
        title: "Booking submitted successfully!",
        description: "Thank you for choosing Mela Labs. We will contact you soon.",
      });

      reset();
      setDate(undefined);
      onClose();
    } catch (error) {
      toast({
        title: "Error submitting booking, please try again.",
        description: "Please try again or contact us directly at olinaftesfayea@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle>Book Free Consultation</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                {...register("fullName")}
                className={errors.fullName ? "border-destructive" : ""}
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                {...register("phone")}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                {...register("address")}
                className={errors.address ? "border-destructive" : ""}
              />
              {errors.address && (
                <p className="text-sm text-destructive">{errors.address.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="selectedService">Selected Service *</Label>
              <Select
                onValueChange={(value) => setValue("selectedService", value)}
                defaultValue={preselectedService}
              >
                <SelectTrigger className={errors.selectedService ? "border-destructive" : ""}>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  <SelectItem value="Virtual Assistance & Operations">Virtual Assistance & Operations</SelectItem>
                  <SelectItem value="Creative & Media">Creative & Media</SelectItem>
                  <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                  <SelectItem value="Technology & AI">Technology & AI</SelectItem>
                  <SelectItem value="Business Solutions">Business Solutions</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.selectedService && (
                <p className="text-sm text-destructive">{errors.selectedService.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Preferred Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate);
                      if (newDate) {
                        setValue("preferredDate", newDate);
                      }
                    }}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              {!date && (
                <p className="text-sm text-muted-foreground">Please select your preferred consultation date</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Consultation"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}