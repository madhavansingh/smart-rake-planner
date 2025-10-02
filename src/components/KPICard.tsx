import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface KPICardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: string;
  suffix?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'success';
  delay?: number;
}

const KPICard = ({ title, value, icon: Icon, trend, suffix = '', color = 'primary', delay = 0 }: KPICardProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  const colorClasses = {
    primary: 'from-primary to-primary/80',
    secondary: 'from-secondary to-secondary/80',
    accent: 'from-accent to-yellow-500',
    success: 'from-success to-green-600',
  };

  return (
    <div className="card-premium p-6 hover:scale-105 transition-transform duration-300 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold font-montserrat text-foreground mb-1">
            {displayValue.toLocaleString()}{suffix}
          </h3>
          {trend && (
            <p className="text-xs text-success font-medium">{trend}</p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default KPICard;
