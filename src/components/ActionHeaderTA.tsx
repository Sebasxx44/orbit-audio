export const ActionHeaderTA = ({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <header className="action-header">
    <p className="eyebrow">
      <span>{index}</span> {eyebrow}
    </p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </header>
);
