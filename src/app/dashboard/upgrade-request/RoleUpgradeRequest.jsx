"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function RoleUpgradeRequest({ currentRole }) {
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestStatus, setRequestStatus] = useState("idle");

  const isPro = currentRole === "pro";
  const isPending = requestStatus === "pending";
  const isApproved = requestStatus === "approved";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reason.trim()) {
      toast({
        title: "Error",
        description: "Please provide a reason for your upgrade request.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setRequestStatus("pending");
      toast({
        title: "Request submitted",
        description: "Your upgrade request has been submitted for review.",
      });
    }, 1500);
  };

  if (isPro) {
    return (
      <Alert className="bg-primary/10 border-primary">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        <AlertTitle>You already have Pro access</AlertTitle>
        <AlertDescription>
          You are currently on the Pro plan with access to all premium features.
        </AlertDescription>
      </Alert>
    );
  }

  if (isPending) {
    return (
      <Alert className="bg-yellow-500/10 border-yellow-500">
        <AlertCircle className="h-4 w-4 text-yellow-500" />
        <AlertTitle>Upgrade request pending</AlertTitle>
        <AlertDescription>
          Your request to upgrade to Pro is currently being reviewed. We'll
          notify you once a decision has been made.
        </AlertDescription>
      </Alert>
    );
  }

  if (isApproved) {
    return (
      <Alert className="bg-green-500/10 border-green-500">
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <AlertTitle>Upgrade request approved!</AlertTitle>
        <AlertDescription>
          Your request to upgrade to Pro has been approved. You now have access
          to all premium features.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium flex items-center gap-2">
            Current Role:{" "}
            <Badge variant="outline" className="capitalize">
              {currentRole}
            </Badge>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Request an upgrade to{" "}
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500">
              Admin
            </Badge>{" "}
            to access premium features
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="capitalize">
            User
          </Badge>
          <span className="text-muted-foreground">→</span>
          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500">
            Admin
          </Badge>
        </div>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Pro Benefits:</h4>
        <ul className="grid gap-2 text-sm">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Advanced analytics and reporting</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Priority support and faster response times</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Access to beta features before general release</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Custom branding and white-labeling options</span>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium">
            Reason for upgrade request
          </label>
          <Textarea
            id="reason"
            placeholder="Please explain why you need Pro access..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground">
            Provide details about how you plan to use the Pro features to help
            with approval.
          </p>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Submitting request..." : "Request Pro Upgrade"}
        </Button>
      </form>
    </div>
  );
}
