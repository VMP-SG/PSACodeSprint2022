export default function SpacedRow({ children, spacing, parentStyles }) {
  spacing = spacing || 10;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
      className={parentStyles}
    >
      {children && children.length > 1
        ? children.map((child, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  marginRight: i === children.length - 1 ? 0 : spacing,
                }}
              >
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
