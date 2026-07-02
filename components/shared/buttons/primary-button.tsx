import { Button } from "@/components/ui/button";

export function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className="bg-primary"
      {...props}
    />
  );
}