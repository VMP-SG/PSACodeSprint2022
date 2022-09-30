export default function SpacedColumn({
  children,
  spacing,
  alignItems,
  styles,
  parentStyles
}) {
  alignItems = alignItems || "center";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: alignItems,
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
                  alignItems: alignItems,
                  marginBottom: i === children.length - 1 ? 0 : spacing,
                }}
                className={styles}
              >
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
