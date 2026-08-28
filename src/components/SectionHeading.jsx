const SectionHeading = ({ index, title }) => {
    return (
        <div className="mb-10 md:mb-14">
            <p className="text-accent text-xs tracking-[0.28em] uppercase font-medium mb-3">
                {index}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-tight">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeading;
