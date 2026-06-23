import { useState, useMemo, useEffect, useRef } from "react";
import { FileText, Users, MapPin, Wifi, ArrowRight, CheckCircle, Search, AlertCircle, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Alert, AlertDescription } from "../ui/alert";
import { Badge } from "../ui/badge";
import { ChatMessenger } from "../ChatMessenger";
import { REGIONS, PROVINCES, MUNICIPALITIES, MEMBERSHIP_PLANS, CONTRIBUTION_OPTIONS, type Municipality, type MembershipPlan } from "../data/philippineLocations";

interface MemberInquiryPageProps {
  onNavigate?: (page: string) => void;
}

export function MemberInquiryPage({ onNavigate }: MemberInquiryPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [municipalitySearch, setMunicipalitySearch] = useState("");
  const [showMunicipalitySuggestions, setShowMunicipalitySuggestions] = useState(false);
  const [showMunicipalityDropdown, setShowMunicipalityDropdown] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stepErrors, setStepErrors] = useState<Record<number, boolean>>({});
  const [hasAttemptedStep, setHasAttemptedStep] = useState<Record<number, boolean>>({});

  // Refs for auto-scrolling to errors
  const formRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    noEmail: false, // New field for "I don't have email"
    
    // Address Information
    address: "",
    barangay: "",
    municipality: "",
    province: "",
    region: "",
    zipCode: "",
    
    // Membership Information
    membershipType: "",
    organizationName: "",
    organizationRole: "",
    selectedPlan: "",
    
    // ICT Background
    currentInternetProvider: "",
    currentInternetSpeed: "",
    internetSatisfaction: "",
    ictExperience: "",
    technicalSkills: [],
    
    // Cooperative Interest
    reasonForJoining: "",
    servicesInterested: [],
    availabilityForMeetings: "",
    wantsToContribute: "",
    selectedContributions: [],
    
    // Additional Information
    additionalComments: "",
    agreedToTerms: false,
    agreedToContact: false
  });

  const calculateAge = (birthDate: string): number => {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const validateAge = (birthDate: string): boolean => {
    const age = calculateAge(birthDate);
    return age >= 12;
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phone);
  };

  // Get provinces for selected region
  const regionProvinces = useMemo(() => {
    if (!formData.region) return [];
    return PROVINCES.filter(province => province.region === formData.region);
  }, [formData.region]);

  // Get municipalities for selected province
  const provinceMunicipalities = useMemo(() => {
    if (!formData.province || !formData.region) return [];
    return MUNICIPALITIES.filter(municipality => 
      municipality.province === formData.province && municipality.region === formData.region
    );
  }, [formData.province, formData.region]);

  // Filter municipalities based on search
  const filteredMunicipalities = useMemo(() => {
    if (!municipalitySearch) return provinceMunicipalities;
    return provinceMunicipalities.filter(
      municipality => municipality.name.toLowerCase().includes(municipalitySearch.toLowerCase())
    );
  }, [municipalitySearch, provinceMunicipalities]);

  const selectedMunicipalityData = useMemo(() => {
    return MUNICIPALITIES.find(
      (m) => m.name === formData.municipality && 
             m.province === formData.province && 
             m.region === formData.region
    );
  }, [formData.municipality, formData.province, formData.region]);

  // Auto-scroll to top of form
  const scrollToTop = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Auto-scroll to first error function
  const scrollToFirstError = (errorFields: string[]) => {
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const fieldRef = fieldRefs.current[firstErrorField];
      if (fieldRef) {
        fieldRef.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        // Add focus to the field if it's an input
        const inputElement = fieldRef.querySelector('input, select, textarea');
        if (inputElement) {
          (inputElement as HTMLElement).focus();
        }
      }
    }
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Auto-populate zip code when municipality changes
      if (field === 'municipality' && typeof value === 'string') {
        const municipality = MUNICIPALITIES.find(
          m => m.name === value && 
               m.province === prev.province && 
               m.region === prev.region
        );
        if (municipality) {
          newData.zipCode = municipality.zipCode;
          newData.barangay = ""; // Reset barangay when municipality changes
        }
        setMunicipalitySearch(value);
        setShowMunicipalitySuggestions(false);
        setShowMunicipalityDropdown(false);
      }
      
      // Reset municipality and related fields when province changes
      if (field === 'province') {
        newData.municipality = "";
        newData.barangay = "";
        newData.zipCode = "";
        setMunicipalitySearch("");
      }
      
      // Reset province and related fields when region changes
      if (field === 'region') {
        newData.province = "";
        newData.municipality = "";
        newData.barangay = "";
        newData.zipCode = "";
        setMunicipalitySearch("");
      }

      // Clear email when "no email" is checked
      if (field === 'noEmail' && value === true) {
        newData.email = "";
      }
      
      return newData;
    });
    
    // Clear specific field errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleTechnicalSkillsChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      technicalSkills: checked 
        ? [...prev.technicalSkills, skill]
        : prev.technicalSkills.filter(s => s !== skill)
    }));
  };

  const handleServicesInterestedChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      servicesInterested: checked 
        ? [...prev.servicesInterested, service]
        : prev.servicesInterested.filter(s => s !== service)
    }));
  };

  const handleContributionChange = (contributionId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedContributions: checked 
        ? [...prev.selectedContributions, contributionId]
        : prev.selectedContributions.filter(c => c !== contributionId)
    }));
  };

  const validateStep = (step: number): { isValid: boolean; errors: Record<string, string> } => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      
      // Email validation - only required if "no email" is not checked
      if (!formData.noEmail) {
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address";
      }
      
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!validatePhoneNumber(formData.phone)) {
        newErrors.phone = "Phone must start with 09 and be exactly 11 digits";
      }
      if (formData.dateOfBirth && !validateAge(formData.dateOfBirth)) {
        newErrors.dateOfBirth = "Must be at least 12 years old";
      }
    }

    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.region) newErrors.region = "Region is required";
      
      // More flexible validation for location data
      // Only require province if we have provinces for the selected region
      if (formData.region && regionProvinces.length > 0 && !formData.province) {
        newErrors.province = "Province is required";
      }
      
      // Only require municipality if we have municipalities for the selected province
      if (formData.province && provinceMunicipalities.length > 0 && !formData.municipality.trim()) {
        newErrors.municipality = "Municipality is required";
      }
      
      // Only require barangay if we have a selected municipality with barangays
      if (selectedMunicipalityData && selectedMunicipalityData.barangays.length > 0 && !formData.barangay.trim()) {
        newErrors.barangay = "Barangay is required";
      }
      
      if (!formData.membershipType) newErrors.membershipType = "Membership type is required";
      if (!formData.selectedPlan) newErrors.selectedPlan = "Membership plan is required";
    }

    if (step === 4) {
      if (!formData.reasonForJoining.trim()) newErrors.reasonForJoining = "Reason for joining is required";
      if (!formData.agreedToTerms) newErrors.agreedToTerms = "You must agree to the terms";
      if (!formData.agreedToContact) newErrors.agreedToContact = "You must consent to being contacted";
    }

    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  // Validate all steps and find the first step with errors - only for attempted steps
  const findFirstStepWithErrors = (): { step: number | null; errorFields: string[] } => {
    const newStepErrors: Record<number, boolean> = {};
    
    for (let step = 1; step <= 4; step++) {
      const validation = validateStep(step);
      newStepErrors[step] = !validation.isValid;
      
      if (!validation.isValid && step < 4) {
        setStepErrors(newStepErrors);
        return { step, errorFields: Object.keys(validation.errors) };
      }
    }
    
    setStepErrors(newStepErrors);
    return { step: null, errorFields: [] };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark step 4 as attempted
    setHasAttemptedStep(prev => ({ ...prev, 4: true }));
    
    // Check all steps for errors
    const { step: firstErrorStep, errorFields } = findFirstStepWithErrors();
    
    if (firstErrorStep) {
      // Navigate to the first step with errors
      setCurrentStep(firstErrorStep);
      setHasAttemptedStep(prev => ({ ...prev, [firstErrorStep]: true }));
      const validation = validateStep(firstErrorStep);
      setErrors(validation.errors);
      
      // Auto-scroll to first error after state update
      setTimeout(() => {
        scrollToFirstError(errorFields);
      }, 100);
      return;
    }
    
    // Final validation for current step
    const finalValidation = validateStep(4);
    if (finalValidation.isValid) {
      console.log("Member inquiry submitted:", formData);
      setIsSubmitted(true);
    } else {
      setErrors(finalValidation.errors);
      setTimeout(() => {
        scrollToFirstError(Object.keys(finalValidation.errors));
      }, 100);
    }
  };

  const nextStep = () => {
    // Mark current step as attempted
    setHasAttemptedStep(prev => ({ ...prev, [currentStep]: true }));
    
    const validation = validateStep(currentStep);
    
    if (validation.isValid) {
      setErrors({});
      setCurrentStep(prev => Math.min(prev + 1, 4));
      // Scroll to top when moving to next step
      setTimeout(() => {
        scrollToTop();
      }, 100);
    } else {
      setErrors(validation.errors);
      setTimeout(() => {
        scrollToFirstError(Object.keys(validation.errors));
      }, 100);
    }
  };

  const prevStep = () => {
    setErrors({});
    setCurrentStep(prev => Math.max(prev - 1, 1));
    // Scroll to top when moving to previous step
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const goToStep = (step: number) => {
    setErrors({});
    setCurrentStep(step);
    // Scroll to top when jumping to a step
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const selectedPlan = MEMBERSHIP_PLANS.find(plan => plan.id === formData.selectedPlan);

  const steps = [
    { number: 1, title: "Personal Information", icon: <Users className="h-4 w-4" /> },
    { number: 2, title: "Location & Membership", icon: <MapPin className="h-4 w-4" /> },
    { number: 3, title: "ICT Background", icon: <Wifi className="h-4 w-4" /> },
    { number: 4, title: "Cooperative Interest", icon: <FileText className="h-4 w-4" /> }
  ];

  // Only update step errors for attempted steps
  useEffect(() => {
    const newStepErrors: Record<number, boolean> = {};
    for (let step = 1; step <= 4; step++) {
      if (hasAttemptedStep[step]) {
        const validation = validateStep(step);
        newStepErrors[step] = !validation.isValid;
      } else {
        newStepErrors[step] = false;
      }
    }
    setStepErrors(newStepErrors);
  }, [formData, hasAttemptedStep]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="mb-4">Thank You for Your Interest!</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your member inquiry has been submitted successfully. We'll review your application and contact you within 2-3 business days.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</div>
                    <div>
                      <p><strong>Application Review</strong></p>
                      <p className="text-muted-foreground text-sm">Our membership team will review your inquiry and assess your location's service eligibility.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</div>
                    <div>
                      <p><strong>Personal Contact</strong></p>
                      <p className="text-muted-foreground text-sm">A TeleCoop representative will contact you to discuss membership benefits and requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</div>
                    <div>
                      <p><strong>Community Integration</strong></p>
                      <p className="text-muted-foreground text-sm">If approved, you'll be invited to cooperative meetings and community programs.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
              <Button onClick={() => onNavigate?.("home")} size="lg">
                Return to Home
              </Button>
              <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+63 918-460-0900</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>telecoop.ph@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatMessenger />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="mb-4">Member Inquiry Registration</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Philippines' first registered telecommunications service cooperative. Complete this form to express your interest in becoming a TeleCoop member.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div 
                  className={`flex items-center space-x-2 cursor-pointer ${
                    currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => goToStep(step.number)}
                >
                  <div className={`relative w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm ${
                    currentStep >= step.number 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-muted-foreground'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      step.icon
                    )}
                    {stepErrors[step.number] && currentStep !== step.number && hasAttemptedStep[step.number] && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm">{step.title}</p>
                    {stepErrors[step.number] && currentStep !== step.number && hasAttemptedStep[step.number] && (
                      <p className="text-xs text-red-500">Has errors</p>
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 md:w-24 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto" ref={formRef}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {steps[currentStep - 1].icon}
                <span>Step {currentStep}: {steps[currentStep - 1].title}</span>
                {stepErrors[currentStep] && hasAttemptedStep[currentStep] && (
                  <Badge variant="destructive" className="text-xs">
                    Please fix errors below
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={currentStep === 4 ? handleSubmit : (e) => e.preventDefault()}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div ref={el => fieldRefs.current['firstName'] = el}>
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`mt-1 h-9 ${errors.firstName ? 'border-red-500' : ''}`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div ref={el => fieldRefs.current['lastName'] = el}>
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`mt-1 h-9 ${errors.lastName ? 'border-red-500' : ''}`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div ref={el => fieldRefs.current['email'] = el}>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address {!formData.noEmail && '*'}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`mt-1 h-9 ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="your.email@example.com"
                          disabled={formData.noEmail}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                        
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="noEmail"
                            checked={formData.noEmail}
                            onCheckedChange={(checked) => handleInputChange('noEmail', checked as boolean)}
                          />
                          <Label htmlFor="noEmail" className="text-sm text-muted-foreground">
                            I don't have an email address
                          </Label>
                        </div>
                      </div>

                      <div ref={el => fieldRefs.current['phone'] = el}>
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`mt-1 h-9 ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="09XXXXXXXXX"
                          maxLength={11}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">Format: 09XXXXXXXXX (11 digits)</p>
                      </div>
                    </div>
                    
                    <div ref={el => fieldRefs.current['dateOfBirth'] = el}>
                      <Label htmlFor="dateOfBirth" className="text-sm font-medium">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className={`mt-1 h-9 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                        max={new Date(new Date().setFullYear(new Date().getFullYear() - 12)).toISOString().split('T')[0]}
                      />
                      {errors.dateOfBirth && (
                        <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth}</p>
                      )}
                      {formData.dateOfBirth && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Age: {calculateAge(formData.dateOfBirth)} years old
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Location & Membership */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div ref={el => fieldRefs.current['address'] = el}>
                      <Label htmlFor="address" className="text-sm font-medium">Complete Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={`mt-1 h-9 ${errors.address ? 'border-red-500' : ''}`}
                        placeholder="House No., Street, Subdivision"
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                      )}
                    </div>
                    
                    <div ref={el => fieldRefs.current['region'] = el}>
                      <Label htmlFor="region" className="text-sm font-medium">Region *</Label>
                      <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
                        <SelectTrigger className={`mt-1 h-9 ${errors.region ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                        <SelectContent>
                          {REGIONS.map((region) => (
                            <SelectItem key={region.code} value={region.code}>
                              {region.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.region && (
                        <p className="text-sm text-red-500 mt-1">{errors.region}</p>
                      )}
                    </div>

                    <div ref={el => fieldRefs.current['province'] = el}>
                      <Label htmlFor="province" className="text-sm font-medium">
                        Province {regionProvinces.length > 0 && '*'}
                      </Label>
                      <Select 
                        value={formData.province} 
                        onValueChange={(value) => handleInputChange('province', value)}
                        disabled={!formData.region}
                      >
                        <SelectTrigger className={`mt-1 h-9 ${errors.province ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select your province" />
                        </SelectTrigger>
                        <SelectContent>
                          {regionProvinces.map((province) => (
                            <SelectItem key={province.code} value={province.code}>
                              {province.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.province && (
                        <p className="text-sm text-red-500 mt-1">{errors.province}</p>
                      )}
                      {formData.region && regionProvinces.length === 0 && (
                        <p className="text-xs text-amber-600 mt-1">
                          No provinces listed for this region yet. You can continue without selecting a province.
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative" ref={el => fieldRefs.current['municipality'] = el}>
                        <Label htmlFor="municipality" className="text-sm font-medium">
                          Municipality/City {provinceMunicipalities.length > 0 && '*'}
                        </Label>
                        
                        {/* Combined Search and Dropdown */}
                        <div className="relative">
                          <Input
                            id="municipality"
                            value={municipalitySearch}
                            onChange={(e) => {
                              setMunicipalitySearch(e.target.value);
                              setShowMunicipalitySuggestions(true);
                              setShowMunicipalityDropdown(false);
                              if (!e.target.value) {
                                handleInputChange('municipality', '');
                              }
                            }}
                            onFocus={() => {
                              if (municipalitySearch) {
                                setShowMunicipalitySuggestions(true);
                              } else if (provinceMunicipalities.length > 0) {
                                setShowMunicipalityDropdown(true);
                              }
                            }}
                            onBlur={() => {
                              setTimeout(() => {
                                setShowMunicipalitySuggestions(false);
                                setShowMunicipalityDropdown(false);
                              }, 200);
                            }}
                            className={`mt-1 h-9 pr-10 ${errors.municipality ? 'border-red-500' : ''}`}
                            placeholder={provinceMunicipalities.length > 0 ? "Search or click dropdown" : "Type municipality name"}
                            disabled={!formData.region}
                          />
                          {provinceMunicipalities.length > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                if (formData.region) {
                                  setShowMunicipalityDropdown(!showMunicipalityDropdown);
                                  setShowMunicipalitySuggestions(false);
                                }
                              }}
                              disabled={!formData.region}
                              className={`absolute right-2 top-3 h-6 w-6 rounded border flex items-center justify-center transition-colors ${
                                formData.region 
                                  ? 'bg-primary text-white border-primary hover:bg-primary/80' 
                                  : 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                              }`}
                            >
                              {municipalitySearch ? (
                                <Search className="h-3 w-3" />
                              ) : (
                                <ChevronDown className="h-3 w-3" />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Search Suggestions */}
                        {showMunicipalitySuggestions && filteredMunicipalities.length > 0 && (
                          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto">
                            {filteredMunicipalities.map((municipality) => (
                              <button
                                key={municipality.name}
                                type="button"
                                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                                onClick={() => {
                                  handleInputChange('municipality', municipality.name);
                                  setMunicipalitySearch(municipality.name);
                                  setShowMunicipalitySuggestions(false);
                                }}
                              >
                                {municipality.name}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Dropdown List */}
                        {showMunicipalityDropdown && provinceMunicipalities.length > 0 && (
                          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto">
                            {provinceMunicipalities.map((municipality) => (
                              <button
                                key={municipality.name}
                                type="button"
                                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                                onClick={() => {
                                  handleInputChange('municipality', municipality.name);
                                  setMunicipalitySearch(municipality.name);
                                  setShowMunicipalityDropdown(false);
                                }}
                              >
                                {municipality.name}
                              </button>
                            ))}
                          </div>
                        )}

                        {errors.municipality && (
                          <p className="text-sm text-red-500 mt-1">{errors.municipality}</p>
                        )}
                        
                        {((formData.region && !formData.province && regionProvinces.length === 0) || 
                          (formData.province && provinceMunicipalities.length === 0)) && (
                          <p className="text-xs text-amber-600 mt-1">
                            No municipalities listed for this area yet. You can type your municipality name or continue without selecting.
                          </p>
                        )}
                      </div>
                      <div ref={el => fieldRefs.current['barangay'] = el}>
                        <Label htmlFor="barangay" className="text-sm font-medium">
                          Barangay {selectedMunicipalityData?.barangays.length && selectedMunicipalityData.barangays.length > 0 && '*'}
                        </Label>
                        <Select 
                          value={formData.barangay} 
                          onValueChange={(value) => handleInputChange('barangay', value)}
                          disabled={!selectedMunicipalityData}
                        >
                          <SelectTrigger className={`mt-1 h-9 ${errors.barangay ? 'border-red-500' : ''}`}>
                            <SelectValue placeholder="Select barangay" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedMunicipalityData?.barangays.map((barangay) => (
                              <SelectItem key={barangay} value={barangay}>
                                {barangay}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.barangay && (
                          <p className="text-sm text-red-500 mt-1">{errors.barangay}</p>
                        )}
                        {formData.municipality && !selectedMunicipalityData && (
                          <p className="text-xs text-amber-600 mt-1">
                            No barangay data available for this municipality yet. You can continue without selecting.
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode" className="text-sm font-medium">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        className="mt-1 h-9"
                        disabled
                        placeholder="Auto-filled based on location"
                      />
                      <p className="text-xs text-muted-foreground mt-1">ZIP code is automatically filled when you select your municipality</p>
                    </div>
                    
                    <div ref={el => fieldRefs.current['membershipType'] = el}>
                      <Label className="text-sm font-medium">Membership Type *</Label>
                      <div className="mt-2 space-y-3">
                        {[
                          { value: "individual", label: "Individual Member", desc: "For individual residents" },
                          { value: "family", label: "Family/Household Member", desc: "For household units" },
                          { value: "business", label: "Small Business/Enterprise", desc: "For small businesses" },
                          { value: "organization", label: "Community Organization", desc: "For organizations" },
                          { value: "ict-provider", label: "Micro ICT Service Provider", desc: "For ICT service providers" }
                        ].map((option) => (
                          <div key={option.value} className="relative">
                            <input
                              type="radio"
                              id={option.value}
                              name="membershipType"
                              value={option.value}
                              checked={formData.membershipType === option.value}
                              onChange={(e) => handleInputChange('membershipType', e.target.value)}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={option.value}
                              className={`flex items-start space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
                                formData.membershipType === option.value
                                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full border-2 mt-0.5 ${
                                formData.membershipType === option.value
                                  ? 'border-primary bg-primary'
                                  : 'border-gray-300'
                              }`}>
                                {formData.membershipType === option.value && (
                                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{option.label}</p>
                                <p className="text-xs text-muted-foreground">{option.desc}</p>
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.membershipType && (
                        <p className="text-sm text-red-500 mt-1">{errors.membershipType}</p>
                      )}
                    </div>

                    {/* Membership Plans */}
                    <div ref={el => fieldRefs.current['selectedPlan'] = el}>
                      <Label className="text-sm font-medium">Select Membership Plan *</Label>
                      <div className="mt-2 space-y-3">
                        {MEMBERSHIP_PLANS.map((plan) => (
                          <div key={plan.id} className="relative">
                            <input
                              type="radio"
                              id={plan.id}
                              name="selectedPlan"
                              value={plan.id}
                              checked={formData.selectedPlan === plan.id}
                              onChange={(e) => handleInputChange('selectedPlan', e.target.value)}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={plan.id}
                              className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                                formData.selectedPlan === plan.id
                                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-4 h-4 rounded-full border-2 ${
                                    formData.selectedPlan === plan.id
                                      ? 'border-primary bg-primary'
                                      : 'border-gray-300'
                                  }`}>
                                    {formData.selectedPlan === plan.id && (
                                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                                    )}
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-medium flex items-center gap-2">
                                      {plan.name}
                                      {plan.recommended && (
                                        <Badge variant="secondary" className="text-xs">Recommended</Badge>
                                      )}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">{plan.speed}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-medium">₱{plan.price.toLocaleString()}/month</p>
                                  <p className="text-xs text-muted-foreground">
                                    ₱{(plan.membershipFee + plan.shareCapital).toLocaleString()} initial
                                  </p>
                                </div>
                              </div>
                              <div className="text-xs text-muted-foreground space-y-1">
                                {plan.features.slice(0, 3).map((feature, index) => (
                                  <p key={index}>• {feature}</p>
                                ))}
                                {plan.features.length > 3 && (
                                  <p>• And {plan.features.length - 3} more features...</p>
                                )}
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.selectedPlan && (
                        <p className="text-sm text-red-500 mt-1">{errors.selectedPlan}</p>
                      )}
                    </div>

                    {selectedPlan && (
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Selected Plan Summary:</strong> {selectedPlan.name} - ₱{selectedPlan.price.toLocaleString()}/month
                          <br />
                          <strong>Initial Investment:</strong> ₱{selectedPlan.membershipFee.toLocaleString()} membership fee + ₱{selectedPlan.shareCapital.toLocaleString()} share capital
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {(formData.membershipType === 'organization' || formData.membershipType === 'business' || formData.membershipType === 'ict-provider') && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="organizationName" className="text-sm font-medium">Organization/Business Name</Label>
                          <Input
                            id="organizationName"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange('organizationName', e.target.value)}
                            className="mt-1 h-9"
                            placeholder="Enter organization name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="organizationRole" className="text-sm font-medium">Your Role/Position</Label>
                          <Input
                            id="organizationRole"
                            value={formData.organizationRole}
                            onChange={(e) => handleInputChange('organizationRole', e.target.value)}
                            className="mt-1 h-9"
                            placeholder="Your position"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: ICT Background */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentInternetProvider" className="text-sm font-medium">Current Internet Provider</Label>
                        <Select value={formData.currentInternetProvider} onValueChange={(value) => handleInputChange('currentInternetProvider', value)}>
                          <SelectTrigger className="mt-1 h-9">
                            <SelectValue placeholder="Select provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No current internet</SelectItem>
                            <SelectItem value="pldt">PLDT</SelectItem>
                            <SelectItem value="globe">Globe</SelectItem>
                            <SelectItem value="smart">Smart</SelectItem>
                            <SelectItem value="converge">Converge</SelectItem>
                            <SelectItem value="sky">Sky</SelectItem>
                            <SelectItem value="dito">DITO</SelectItem>
                            <SelectItem value="local-isp">Local ISP</SelectItem>
                            <SelectItem value="mobile-data">Mobile Data Only</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="currentInternetSpeed" className="text-sm font-medium">Current Internet Speed</Label>
                        <Select value={formData.currentInternetSpeed} onValueChange={(value) => handleInputChange('currentInternetSpeed', value)}>
                          <SelectTrigger className="mt-1 h-9">
                            <SelectValue placeholder="Select speed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No internet</SelectItem>
                            <SelectItem value="less-than-5">Less than 5 Mbps</SelectItem>
                            <SelectItem value="5-15">5-15 Mbps</SelectItem>
                            <SelectItem value="15-25">15-25 Mbps</SelectItem>
                            <SelectItem value="25-50">25-50 Mbps</SelectItem>
                            <SelectItem value="50-100">50-100 Mbps</SelectItem>
                            <SelectItem value="more-than-100">More than 100 Mbps</SelectItem>
                            <SelectItem value="unknown">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Internet Service Satisfaction</Label>
                      <div className="mt-2 space-y-2">
                        {[
                          { value: "very-satisfied", label: "Very Satisfied" },
                          { value: "satisfied", label: "Satisfied" },
                          { value: "neutral", label: "Neutral" },
                          { value: "dissatisfied", label: "Dissatisfied" },
                          { value: "very-dissatisfied", label: "Very Dissatisfied" },
                          { value: "no-service", label: "No Current Service" }
                        ].map((option) => (
                          <div key={option.value} className="relative">
                            <input
                              type="radio"
                              id={option.value}
                              name="internetSatisfaction"
                              value={option.value}
                              checked={formData.internetSatisfaction === option.value}
                              onChange={(e) => handleInputChange('internetSatisfaction', e.target.value)}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={option.value}
                              className={`flex items-center space-x-3 p-2 border rounded-lg cursor-pointer transition-all ${
                                formData.internetSatisfaction === option.value
                                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.internetSatisfaction === option.value
                                  ? 'border-primary bg-primary'
                                  : 'border-gray-300'
                              }`}>
                                {formData.internetSatisfaction === option.value && (
                                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                                )}
                              </div>
                              <span className="text-sm">{option.label}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="ictExperience" className="text-sm font-medium">ICT/Technology Experience Level</Label>
                      <Select value={formData.ictExperience} onValueChange={(value) => handleInputChange('ictExperience', value)}>
                        <SelectTrigger className="mt-1 h-9">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (Basic smartphone/computer use)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (Comfortable with technology)</SelectItem>
                          <SelectItem value="advanced">Advanced (Tech-savvy user)</SelectItem>
                          <SelectItem value="professional">Professional (ICT background/work)</SelectItem>
                          <SelectItem value="expert">Expert (ICT specialist/engineer)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Technical Skills (Select all that apply)</Label>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                          'Basic Computer Skills',
                          'Network Setup/Configuration',
                          'Router/Modem Installation',
                          'WiFi Management',
                          'Cable Installation',
                          'Technical Support',
                          'System Administration',
                          'Community Training',
                          'Project Management',
                          'Financial Management'
                        ].map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={formData.technicalSkills.includes(skill)}
                              onCheckedChange={(checked) => handleTechnicalSkillsChange(skill, checked as boolean)}
                            />
                            <Label htmlFor={skill} className="text-sm">{skill}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Cooperative Interest */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div ref={el => fieldRefs.current['reasonForJoining'] = el}>
                      <Label htmlFor="reasonForJoining" className="text-sm font-medium">Why do you want to join TeleCoop? *</Label>
                      <Textarea
                        id="reasonForJoining"
                        value={formData.reasonForJoining}
                        onChange={(e) => handleInputChange('reasonForJoining', e.target.value)}
                        rows={3}
                        className={`mt-1 resize-none ${errors.reasonForJoining ? 'border-red-500' : ''}`}
                        placeholder="Tell us about your motivation for joining our cooperative..."
                      />
                      {errors.reasonForJoining && (
                        <p className="text-sm text-red-500 mt-1">{errors.reasonForJoining}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Services You're Interested In (Select all that apply)</Label>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                          'Internet Service Access',
                          'Technical Support',
                          'Community ICT Training',
                          'Equipment Purchasing Group',
                          'Network Infrastructure Development',
                          'Cooperative Governance Participation',
                          'Community Development Programs',
                          'Educational Technology Initiatives',
                          'Economic Development Projects',
                          'Legal and Regulatory Support'
                        ].map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.servicesInterested.includes(service)}
                              onCheckedChange={(checked) => handleServicesInterestedChange(service, checked as boolean)}
                            />
                            <Label htmlFor={service} className="text-sm">{service}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="availabilityForMeetings" className="text-sm font-medium">Availability for Cooperative Meetings</Label>
                      <Select value={formData.availabilityForMeetings} onValueChange={(value) => handleInputChange('availabilityForMeetings', value)}>
                        <SelectTrigger className="mt-1 h-9">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays (Mon-Fri)</SelectItem>
                          <SelectItem value="weekends">Weekends (Sat-Sun)</SelectItem>
                          <SelectItem value="evenings">Evenings (After 6 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible Schedule</SelectItem>
                          <SelectItem value="limited">Limited Availability</SelectItem>
                          <SelectItem value="virtual-only">Virtual Meetings Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Additional Contribution Section */}
                    <div>
                      <Label className="text-sm font-medium">Would you like to contribute to TeleCoop beyond your membership?</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        Your membership already includes all required contributions. This is about optional additional ways you can help our cooperative grow.
                      </p>
                      <div className="mt-2 space-y-2">
                        {[
                          { value: "yes", label: "Yes, I'd like to contribute additional time/skills" },
                          { value: "maybe", label: "Maybe, depending on the opportunity" },
                          { value: "no", label: "No, just membership for now" }
                        ].map((option) => (
                          <div key={option.value} className="relative">
                            <input
                              type="radio"
                              id={`contribute-${option.value}`}
                              name="wantsToContribute"
                              value={option.value}
                              checked={formData.wantsToContribute === option.value}
                              onChange={(e) => handleInputChange('wantsToContribute', e.target.value)}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={`contribute-${option.value}`}
                              className={`flex items-center space-x-3 p-2 border rounded-lg cursor-pointer transition-all ${
                                formData.wantsToContribute === option.value
                                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.wantsToContribute === option.value
                                  ? 'border-primary bg-primary'
                                  : 'border-gray-300'
                              }`}>
                                {formData.wantsToContribute === option.value && (
                                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                                )}
                              </div>
                              <span className="text-sm">{option.label}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {(formData.wantsToContribute === "yes" || formData.wantsToContribute === "maybe") && (
                      <div>
                        <Label className="text-sm font-medium">How would you like to contribute? (Select all that interest you)</Label>
                        <div className="mt-2 space-y-3">
                          {CONTRIBUTION_OPTIONS.map((contribution) => (
                            <div key={contribution.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                              <Checkbox
                                id={contribution.id}
                                checked={formData.selectedContributions.includes(contribution.id)}
                                onCheckedChange={(checked) => handleContributionChange(contribution.id, checked as boolean)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <Label htmlFor={contribution.id} className="text-sm font-medium cursor-pointer">
                                  {contribution.title}
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">{contribution.description}</p>
                                <p className="text-xs text-primary mt-1">Time commitment: {contribution.timeCommitment}</p>
                                {contribution.skillsRequired && (
                                  <div className="mt-1">
                                    {contribution.skillsRequired.map((skill, index) => (
                                      <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <Label htmlFor="additionalComments" className="text-sm font-medium">Additional Comments or Questions</Label>
                      <Textarea
                        id="additionalComments"
                        value={formData.additionalComments}
                        onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                        rows={3}
                        className="mt-1 resize-none"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2" ref={el => fieldRefs.current['agreedToTerms'] = el}>
                        <Checkbox
                          id="agreedToTerms"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                        />
                        <Label htmlFor="agreedToTerms" className="text-sm">
                          I agree to the TeleCoop membership terms and cooperative principles *
                        </Label>
                      </div>
                      {errors.agreedToTerms && (
                        <p className="text-sm text-red-500">{errors.agreedToTerms}</p>
                      )}
                      <div className="flex items-center space-x-2" ref={el => fieldRefs.current['agreedToContact'] = el}>
                        <Checkbox
                          id="agreedToContact"
                          checked={formData.agreedToContact}
                          onCheckedChange={(checked) => handleInputChange('agreedToContact', checked as boolean)}
                        />
                        <Label htmlFor="agreedToContact" className="text-sm">
                          I consent to being contacted by TeleCoop representatives regarding my membership inquiry *
                        </Label>
                      </div>
                      {errors.agreedToContact && (
                        <p className="text-sm text-red-500">{errors.agreedToContact}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="h-9"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep} className="h-9">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="h-9"
                    >
                      Submit Inquiry
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <ChatMessenger />
    </div>
  );
}