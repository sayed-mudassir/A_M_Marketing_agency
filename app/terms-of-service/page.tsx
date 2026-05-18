export default function TermsOfServicePage() {
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
            Legal Information
          </div>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-foreground">
              Terms of
            </span>{' '}
            <span className="gradient-text">
              Service
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            These Terms of Service outline the rules, responsibilities,
            and conditions governing the use of AM Marketing Co. services,
            website, and digital platforms.
          </p>

          <div className="mt-6 text-sm text-muted-foreground">
            Last Updated: May 2026
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 space-y-8">

          {/* Acceptance */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Acceptance of Terms
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                By accessing or using the AM Marketing Co. website,
                services, or digital platforms, you agree to comply
                with these Terms of Service.
              </p>

              <p>
                If you do not agree with any part of these terms,
                you should discontinue use of our website and services.
              </p>
            </div>
          </section>

          {/* Services */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Services Provided
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-muted-foreground">
              <p>
                AM Marketing Co. offers digital marketing, branding,
                web development, app development, SEO, and related
                creative and technical services.
              </p>

              <div>
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  Services may include:
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Website Design & Development
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Social Media Marketing
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Performance Marketing
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Branding & Creative Services
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    SEO & Digital Optimization
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              User Responsibilities
            </h2>

            <div className="mt-5">
              <ul className="space-y-4 leading-8 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Provide accurate and truthful information
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Use our website and services lawfully
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Avoid misuse, unauthorized access, or malicious activity
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  Respect intellectual property and content ownership
                </li>
              </ul>
            </div>
          </section>

          {/* Payments */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Payments & Billing
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                Payments for services must be made according to
                agreed project terms, invoices, or contracts.
              </p>

              <p>
                Delayed payments may affect project timelines,
                delivery schedules, or ongoing service availability.
              </p>

              <p>
                All pricing and quotations are subject to revision
                unless agreed upon in writing.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Intellectual Property
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                All website content, branding, designs, graphics,
                source code, and digital assets created by
                AM Marketing Co. remain protected under applicable
                intellectual property laws.
              </p>

              <p>
                Unauthorized reproduction, distribution, or modification
                of our materials is prohibited without written permission.
              </p>
            </div>
          </section>

          {/* Limitation */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Limitation of Liability
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                AM Marketing Co. shall not be held liable for indirect,
                incidental, or consequential damages resulting from the
                use of our website or services.
              </p>

              <p>
                While we strive for accuracy and reliability, we do not
                guarantee uninterrupted operation or error-free services.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Termination of Services
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                We reserve the right to suspend or terminate services
                if these Terms of Service are violated or if unlawful
                activity is detected.
              </p>

              <p>
                Clients may also discontinue services subject to agreed
                contractual obligations and payment terms.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Changes to Terms
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
              <p>
                AM Marketing Co. may update or revise these Terms
                periodically to reflect business, legal, or operational
                changes.
              </p>

              <p>
                Updated versions will be posted on this page with
                the revised date.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="glass rounded-3xl border border-primary/20 p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Information
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              If you have questions regarding these Terms of Service,
              feel free to contact our team.
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