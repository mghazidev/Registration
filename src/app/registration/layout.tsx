export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Registration</h1>
      <div>{children}</div>
    </div>
  );
}
