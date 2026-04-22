const variants = {
  primary:
    "border border-gold/60 bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black shadow-[0_0_18px_rgba(212,175,55,0.3)] hover:shadow-[0_0_28px_rgba(255,215,0,0.44)]",
  secondary: "border border-gold/45 bg-transparent text-gold hover:bg-gold/10 hover:border-gold"
};

const Button = ({ children, className = "", disabled = false, variant = "primary", ...props }) => (
  <button
    className={`rounded-lg px-4 py-2 font-medium transition duration-300 disabled:cursor-not-allowed disabled:opacity-70 ${variants[variant]} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
