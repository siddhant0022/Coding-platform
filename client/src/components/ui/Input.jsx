const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full rounded-lg border border-gold/25 bg-black-900/70 px-3 py-2 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] ${className}`}
    {...props}
  />
);

export default Input;
