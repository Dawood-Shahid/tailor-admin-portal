interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className='mb-8'>
      <h1 className='text-2xl font-semibold foreground-heading'>{title}</h1>
      {subtitle && (
        <p className='mt-1 text-sm text-[var(--app-text-secondary)]'>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
