const Card = ({ children, className = "" }) => (
  <div className={`glass-gold rounded-2xl p-4 shadow-xl ${className}`}>
    {children}
  </div>
);

export default Card;
