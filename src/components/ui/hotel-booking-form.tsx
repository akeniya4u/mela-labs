import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const hotelBookingSchema = z.object({
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
  preferredDate: z.date({ message: "Please select a date" }),
  selectedService: z.string().min(1, { message: "Please select a service" })
});

type HotelBookingFormData = z.infer<typeof hotelBookingSchema>;

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw2Udm7oggA6cBsd8NO564kG2iVSwQuorRTFC7iQqLNsV5hMRerpdhLGKapl1fHa5zW/exec";

export function HotelBookingForm() {
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
  } = useForm<HotelBookingFormData>({
    resolver: zodResolver(hotelBookingSchema)
  });

  const selectedService = watch("selectedService");

  const onSubmit = async (data: HotelBookingFormData) => {
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
        fullName: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        address: data.address.trim(),
        preferredDate: format(date, "yyyy-MM-dd"),
        selectedService: data.selectedService
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      toast({
        title: "Booking submitted successfully!",
        description: "Thank you for choosing ZM International Hotel. We will contact you soon.",
      });

      reset();
      setDate(undefined);
      setValue("selectedService", "");
    } catch (error) {
      toast({
        title: "Booking submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto glass-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Book Your Stay at ZM International Hotel
        </CardTitle>
        <p className="text-muted-foreground mt-2">Harar, Ethiopia</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
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
                placeholder="your@email.com"
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
                type="tel"
                placeholder="+251 XXX XXX XXX"
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
                placeholder="Your address"
                {...register("address")}
                className={errors.address ? "border-destructive" : ""}
              />
              {errors.address && (
                <p className="text-sm text-destructive">{errors.address.message}</p>
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
              {!date && errors.preferredDate && (
                <p className="text-sm text-destructive">{errors.preferredDate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="selectedService">Selected Service *</Label>
              <Select
                value={selectedService}
                onValueChange={(value) => setValue("selectedService", value)}
              >
                <SelectTrigger className={errors.selectedService ? "border-destructive" : ""}>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Room Booking">Room Booking</SelectItem>
                  <SelectItem value="Event Hall">Event Hall</SelectItem>
                  <SelectItem value="Restaurant Reservation">Restaurant Reservation</SelectItem>
                  <SelectItem value="Spa">Spa</SelectItem>
                </SelectContent>
              </Select>
              {errors.selectedService && (
                <p className="text-sm text-destructive">{errors.selectedService.message}</p>
              )}
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
