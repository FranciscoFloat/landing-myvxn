export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-foreground p-4 text-center w-full">
      <p>&copy; {year} My Vxn. All rights reserved.</p>
    </footer>
  );
}
