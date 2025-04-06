import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Status = 'PENDING' | 'COMPLETED' | 'REFUNDED' | 'DISPUTED' | 'RELEASED';

interface PaymentStatusProps {
  status: Status;
  amount: number;
  date: Date;
  stripeId?: string | null;
}

const statusConfig = {
  PENDING: { color: "bg-yellow-400", label: "Payment Pending" },
  COMPLETED: { color: "bg-green-400", label: "Payment Completed" },
  REFUNDED: { color: "bg-red-400", label: "Payment Refunded" },
  DISPUTED: { color: "bg-orange-400", label: "Payment Disputed" },
  RELEASED: { color: "bg-blue-400", label: "Payment Released" },
};

export default function PaymentStatus({ status, amount, date, stripeId }: PaymentStatusProps) {
  const config = statusConfig[status];
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between">
          <span>Payment Status</span>
          <Badge className={config.color}>{config.label}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-muted-foreground">Amount</p>
            <p className="font-medium">${amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Date</p>
            <p className="font-medium">{new Date(date).toLocaleDateString()}</p>
          </div>
          {stripeId && (
            <div className="col-span-2 mt-2">
              <p className="text-muted-foreground">Payment ID</p>
              <p className="font-medium text-xs truncate">{stripeId}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 