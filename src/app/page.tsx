import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="pt-14">
        <div className="mx-auto max-w-4xl px-8 py-8">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-[var(--berkeley-blue)]">
              Welcome to The Philomath
            </h1>
            <p className="text-lg italic text-[var(--muted-text)]">
              <span className="font-semibold">Philomath</span> (φιλομαθής) — from
              Greek <em>philos</em> (beloved) + <em>manthanein</em> (to learn)
            </p>
            <p className="mt-2 text-lg font-semibold">A lover of learning and studying</p>
          </header>

          <hr className="my-10 border-t border-gray-200" />

          {/* About Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-[var(--berkeley-blue)]">
              About
            </h2>
            <p className="text-lg leading-relaxed">
              The Philomath is a space dedicated to rigorous thinking and accessible
              education. Here, we explore data analytics, statistics, and probability
              through a conversational lens designed for critical thinkers.
            </p>
          </section>

          <hr className="my-10 border-t border-gray-200" />

          {/* Current Projects Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-[var(--berkeley-blue)]">
              Current Projects
            </h2>

            <h3 className="mb-3 text-xl font-semibold text-[var(--berkeley-blue)]">
              Data Analytics for Critical Thinkers
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              A comprehensive textbook on statistics, probability, and econometrics.
              Written in a conversational, question-and-answer format, this book makes
              complex analytical concepts accessible to beginners and seasoned
              practitioners alike.
            </p>
            <p className="mb-2 text-lg">
              <strong>Authors:</strong> Gautam Sethi & Noor Sethi
            </p>
            <p className="mb-6 text-lg">
              <strong>Topics:</strong> Bayesian inference, frequentist research,
              regression analysis, hypothesis testing, and advanced modeling
            </p>

            <a
              href="https://analytics.thephilomath.org"
              className="btn-primary"
            >
              Read the book →
            </a>
          </section>

          <hr className="my-10 border-t border-gray-200" />

          {/* About the Authors Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-[var(--berkeley-blue)]">
              About the Authors
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Gautam Sethi</strong> and <strong>Noor Sethi</strong> are
              educators and practitioners passionate about making data analytics
              accessible. Their work emphasizes clear thinking, rigorous methods, and
              practical application.
            </p>
          </section>

          <hr className="my-10 border-t border-gray-200" />

          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-[var(--berkeley-blue)]">
              Contact
            </h2>
            <p className="text-lg">
              For inquiries, collaboration, or feedback:
            </p>
            <p className="mt-2 text-lg">
              <a href="mailto:contact@thephilomath.org">
                contact@thephilomath.org
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
