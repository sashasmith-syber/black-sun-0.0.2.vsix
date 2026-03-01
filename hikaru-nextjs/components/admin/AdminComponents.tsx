interface AdminCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function AdminCard({ children, title, className = "" }: AdminCardProps) {
  return (
    <div
      className={`border-2 border-bs-cyan rounded-lg bg-bs-black/50 backdrop-blur-sm p-6 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold text-bs-cyan mb-4 font-mono">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

interface AdminInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function AdminInput({ label, error, ...props }: AdminInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-mono text-bs-cyan mb-2 uppercase">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 bg-bs-black border-2 border-bs-cyan rounded font-mono text-bs-white focus:outline-none focus:border-bs-green focus:shadow-neon-cyan transition-all disabled:opacity-50"
      />
      {error && (
        <p className="mt-1 text-xs text-bs-red font-mono">{error}</p>
      )}
    </div>
  );
}

interface AdminTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function AdminTextarea({ label, error, ...props }: AdminTextareaProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-mono text-bs-cyan mb-2 uppercase">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full px-4 py-2 bg-bs-black border-2 border-bs-cyan rounded font-mono text-bs-white focus:outline-none focus:border-bs-green focus:shadow-neon-cyan transition-all disabled:opacity-50 resize-vertical min-h-[100px]"
      />
      {error && (
        <p className="mt-1 text-xs text-bs-red font-mono">{error}</p>
      )}
    </div>
  );
}

interface AdminButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function AdminButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: AdminButtonProps) {
  const variantStyles = {
    primary:
      "bg-bs-cyan text-bs-black hover:bg-bs-green hover:shadow-neon-green",
    secondary:
      "bg-transparent border-2 border-bs-cyan text-bs-cyan hover:bg-bs-cyan/10",
    danger: "bg-bs-red text-bs-white hover:bg-bs-red/80",
  };

  return (
    <button
      {...props}
      className={`
        px-6 py-2 rounded font-mono font-bold uppercase text-sm
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
