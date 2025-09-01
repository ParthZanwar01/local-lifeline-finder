import { ResourceDirectory } from "@/components/ResourceDirectory";
import { Footer } from "@/components/Footer";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Community Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover essential services, support programs, and community resources available in Cypress, Texas. 
            Find exactly what you need with our comprehensive search and filtering tools.
          </p>
        </div>
      </section>

      {/* Resource Directory */}
      <ResourceDirectory />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
