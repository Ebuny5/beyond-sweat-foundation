import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Heart, BookOpen } from "lucide-react";
import schoolImage from "@/assets/school-awareness.jpg";

const SchoolAwareness = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-bold">
                BS
              </div>
              <span className="hidden sm:inline">Beyond Sweat Foundation</span>
            </a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(91, 33, 182, 0.85), rgba(126, 34, 206, 0.85)), url(${schoolImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">School Awareness Campaign</h1>
          <p className="text-2xl mb-4 opacity-90 max-w-3xl mx-auto">
            Fostering understanding, empathy, and early help-seeking in Nigerian schools
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We deliver concise, evidence-based awareness sessions (10–20 minutes) in secondary schools across 
                  Nigeria and Africa. Each session is designed in collaboration with school administrators to ensure 
                  minimal disruption to class schedules while fostering understanding, empathy, and early help-seeking 
                  for students living with hyperhidrosis.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through interactive demonstrations, peer-led discussions, and medically accurate resources, the 
                  campaign reduces stigma, empowers affected learners, and promotes inclusion within school environments.
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <GraduationCap className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Evidence-Based Education</h3>
                  <p className="text-muted-foreground">
                    Our sessions are grounded in medical research and lived experiences, ensuring accurate and 
                    relatable information for students and educators.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Users className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Peer-Led Discussions</h3>
                  <p className="text-muted-foreground">
                    Students engage in interactive discussions that normalize conversations about hyperhidrosis 
                    and create safe spaces for sharing experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Stigma Reduction</h3>
                  <p className="text-muted-foreground">
                    By addressing misconceptions and promoting empathy, we work to eliminate the stigma 
                    surrounding hyperhidrosis in educational settings.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <BookOpen className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Resource Distribution</h3>
                  <p className="text-muted-foreground">
                    Students and teachers receive practical resources on managing hyperhidrosis, including 
                    coping strategies and information about support services.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Section */}
            <Card className="bg-primary text-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p className="text-lg">
                      Reaching thousands of students across Nigerian secondary schools
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p className="text-lg">
                      Training educators to identify and support students with hyperhidrosis
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p className="text-lg">
                      Creating inclusive school environments where all students can thrive
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <p className="text-lg">
                      Empowering students to seek help early and manage their condition effectively
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Want to bring this program to your school?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us to schedule an awareness session for your students and educators.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAwareness;
