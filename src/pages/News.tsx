import { CommunityNews } from "@/components/CommunityNews";
import { Footer } from "@/components/Footer";

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-primary/10 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            News & Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with your Cypress community through local news, upcoming events, and opportunities to get involved. 
            Discover ways to connect, learn, and contribute to our vibrant community.
          </p>
        </div>
      </section>

      {/* Community News & Events */}
      <CommunityNews />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
