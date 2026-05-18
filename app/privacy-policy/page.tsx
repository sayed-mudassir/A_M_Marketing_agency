
export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-24 text-foreground lg:px-8 lg:py-32">
      
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-xl">
            Privacy & Security
          </div>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-foreground">
              Privacy
            </span>{' '}
            <span className="gradient-text">
              Policy
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Your privacy matters to us. This Privacy Policy explains how
            AM Marketing Co. collects, uses, and protects your information
            when you interact with our website and services.
          </p>

          <div className="mt-6 text-sm text-muted-foreground">
            Last Updated: May 2026
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 space-y-8">

          {/* Section Card */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Introduction
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                Welcome to AM Marketing Co. We are committed to protecting
                your personal information and maintaining transparency about
                how your data is handled.
              </p>

              <p>
                By accessing or using our website and services, you agree
                to the practices described in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Information We Collect
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-muted-foreground">
              <p>
                We may collect information that you voluntarily provide
                through forms, emails, calls, or consultations.
              </p>

              <div>
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  Information may include:
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Full Name
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Email Address
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Phone Number
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Business Information
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Project Requirements & Messages
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              How We Use Your Information
            </h2>

            <div className="mt-5">
              <ul className="space-y-4 leading-8 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Respond to inquiries and provide support
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Deliver marketing and development services
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Improve website experience and performance
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Communicate regarding projects and proposals
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Send updates, offers, or important notifications
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="glass-card rounded-3xl p-8 lg:p-10" id="cookies">
            <h2 className="text-2xl font-semibold text-foreground">
              Cookies & Analytics
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                We may use cookies, analytics tools, and tracking technologies
                to understand user behavior, optimize website performance,
                and improve user experience.
              </p>

              <p>
                You can disable cookies through your browser settings
                at any time.
              </p>
            </div>
          </section>

          {/* Security */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Data Protection & Security
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                We implement appropriate technical and security measures
                to safeguard your personal information from unauthorized
                access, misuse, or disclosure.
              </p>

              <p>
                While we strive to protect your data, no online transmission
                or storage system can be guaranteed to be completely secure.
              </p>
            </div>
          </section>

          {/* Rights */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Your Rights
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                You may have the right to:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  Access your personal information
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  Request corrections or deletion
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  Withdraw communication consent
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  Request clarification regarding data usage
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="glass rounded-3xl border border-primary/20 p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              If you have questions regarding this Privacy Policy
              or your personal data, feel free to contact us.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              
              <div className="rounded-2xl border border-border bg-secondary/30 p-6">
                <div className="text-sm text-muted-foreground">
                  Email
                </div>

                <div className="mt-2 text-lg font-semibold text-foreground">
                  hello@ammarketing.co
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-6">
                <div className="text-sm text-muted-foreground">
                  Phone
                </div>

                <div className="mt-2 text-lg font-semibold text-foreground">
                  +91 75250 06923
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
      
    </main>

  )
}