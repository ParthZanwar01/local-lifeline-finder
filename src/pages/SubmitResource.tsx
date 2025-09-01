import { AddResourceForm } from "@/components/AddResourceForm";
import { Footer } from "@/components/Footer";

export default function SubmitResource() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Submit a Resource
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help grow our community resource hub by submitting information about local services, organizations, 
            or programs that could benefit Cypress residents. Your contribution helps strengthen our community.
          </p>
        </div>
      </section>

      {/* Add Resource Form */}
      <AddResourceForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
