import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const VARIANTS = {
  DEFAULT: 'default',
  DARK: 'dark',
  GREEN: 'green',
} as const;

const cardVariants = cva(
  'rounded-[45px] p-8 border border-custom-border shadow-custom',
  {
    defaultVariants: {
      variant: VARIANTS.DEFAULT,
    },
    variants: {
      variant: {
        [VARIANTS.DEFAULT]: 'bg-custom-card text-custom-card-foreground',
        [VARIANTS.DARK]: 'bg-custom-card-dark text-custom-card-dark-foreground',
        [VARIANTS.GREEN]:
          'bg-custom-card-green text-custom-card-green-foreground',
      },
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ className, variant }))}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const cardTitleVariants = cva(
  'w-fit rounded-md p-1 text-lg font-semibold leading-none tracking-tight',
  {
    defaultVariants: {
      variant: VARIANTS.DEFAULT,
    },
    variants: {
      variant: {
        [VARIANTS.DEFAULT]: 'bg-custom-card text-custom-card-foreground',
        [VARIANTS.DARK]: 'bg-custom-card-dark text-custom-card-dark-foreground',
        [VARIANTS.GREEN]: 'bg-custom-primary text-custom-primary-foreground',
      },
    },
  },
);

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardTitleVariants> {}
const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(cardTitleVariants({ className, variant }))}
        {...props}
      />
    );
  },
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6 pt-0', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
