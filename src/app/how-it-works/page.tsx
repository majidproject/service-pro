/**
 * How It Works Page
 * -----------------
 * A static informational page explaining the platform's workflow to users.
 * Currently serves as a placeholder for the "How it Works" route.
 */
export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">How ServicePro Works</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We connect you with top-rated professionals in your area. 
        It&apos;s as simple as Search, Book, and Relax.
      </p>
      
      {/* TODO: Implement a graphical "Steps" component here (e.g., 1. Search, 2. Book, 3. Relax).
        Consider using icons or an SVG illustration to visualize the user journey effectively.
      */}
    </div>
  );
}