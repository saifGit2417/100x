import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="text-center">
      this layout will come to all pages that start with /sign in route
      {children}
    </div>
  );
};

export default layout;
