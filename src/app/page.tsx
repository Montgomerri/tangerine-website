
import type { ReactNode } from "react";

const DOWNLOAD_URL =
  "https://github.com/Montgomerri/tangerine-releases/releases/download/v1.0.0/Tangerine-Setup-1.0.0.exe";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/dennis-nuamah";

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className={`logo ${dark ? "logo-dark" : ""}`}>
      <img
        src="/images/tangerine_logo.png"
        alt="Tangerine"
        className="logo-image"
      />
    </a>
  );
}

function Pill({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <span className="pill">
      {icon}
      {children}
    </span>
  );
}

function Avatar({
  tone,
  size = 48,
}: {
  tone: string;
  size?: number;
}) {
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, background: tone }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="#fff"
        fillOpacity=".9"
      >
        <circle cx="12" cy="9" r="4.2" />
        <path d="M3.5 22c0-5 3.8-7.5 8.5-7.5s8.5 2.5 8.5 7.5z" />
      </svg>
    </span>
  );
}

function Cursor({ className }: { className: string }) {
  return (
    <svg
      className={`cursor ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#0b4a2e"
    >
      <path d="M3 2l18 8-8 3-3 8z" />
    </svg>
  );
}

function Toggle({ on, dim }: { on?: boolean; dim?: boolean }) {
  return <i className={`toggle ${on ? "on" : ""} ${dim ? "dim" : ""}`} />;
}

export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />

        <header className="nav">
          <div className="nav-left">
            <Logo />

            <nav>
              <a href="#features">
                Features <small>⌄</small>
              </a>
              <a href="#how-it-works">
                How it works <small>⌄</small>
              </a>
              <a href="#about">About</a>
            </nav>
          </div>

          <div className="nav-right">
            <a
              className="btn btn-white"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer
            </a>

            <a
              className="btn btn-green"
              href={DOWNLOAD_URL}
            >
              Download
            </a>
          </div>
        </header>

        <div className="hero-body">
          <span className="float f1">
            <Avatar
              tone="linear-gradient(135deg,#e9b4c9,#b98bd6)"
              size={46}
            />
            <Cursor className="c1" />
          </span>

          <span className="float f2">
            <Avatar
              tone="linear-gradient(135deg,#8a9bb0,#4f5f78)"
              size={46}
            />
            <Cursor className="c2" />
          </span>

          <span className="float f3">
            <Avatar
              tone="linear-gradient(135deg,#d9a27a,#8c5a3c)"
              size={46}
            />
            <Cursor className="c3" />
          </span>

          <span className="float f4">
            <Avatar
              tone="linear-gradient(135deg,#f3d27a,#d49b2f)"
              size={46}
            />
            <Cursor className="c4" />
          </span>

          <h1>
            Your files. One gesture.
            <br />
            <span className="underline">Done.</span>
          </h1>

          <p>
            Tangerine makes everyday file operations effortless.
            <br />
            Compress files, create PDFs and convert images using one
            simple radial menu.
          </p>

          <div className="hero-buttons">
            <a
              className="btn btn-green btn-lg"
              href={DOWNLOAD_URL}
            >
              Download for Windows
            </a>

            <a
              className="btn btn-white btn-lg"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="partners">
          <p>
            One simple menu.
            <br />
            Six everyday operations.
          </p>

          <div>
            <span>ZIP</span>
            <span>PDF</span>
            <span>PNG</span>
            <span>JPG</span>
            <span>WEBP</span>
            <span>AVIF</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="head">
          <Pill
            icon={
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0b4a2e"
                strokeWidth="2.4"
              >
              </svg>
            }
          >
            WHAT TANGERINE DOES
          </Pill>

          <h2>
            Everyday file operations,
            <br />
            without the extra steps.
          </h2>

          <p>
            The tools you use regularly, brought together in one
            convenient floating menu.
          </p>
        </div>

        <div className="bento">
          {/* MAIN FEATURE */}
          <article className="card wide">
            <div className="wide-copy">
              <div>
                <h3>Six actions. One menu.</h3>

                <p>
                  Access six useful file operations from a single
                  radial menu. Select your files, hold Shift, drag
                  and choose what you want to do.
                </p>
              </div>

              <a className="btn btn-green" href="#how-it-works">
                See how it works
              </a>
            </div>
          </article>

          {/* FILE SAFETY */}
          <article className="card">
            <div className="card-head">
              <h3>Your originals stay safe.</h3>

              <p>
                Tangerine creates new files without replacing
                your existing originals.
              </p>
            </div>

            <div className="panel">
              <div className="panel-top">
                <b>File handling</b>
                <span className="chip">Protected</span>
              </div>

              <div className="trow">
                <span>Keep original files</span>
                <Toggle on />
              </div>

              <div className="trow">
                <span>Save outputs beside originals</span>
                <Toggle on />
              </div>

              <div className="trow">
                <span>Prevent file overwriting</span>
                <Toggle on />
              </div>

              <div className="trow faded">
                <span>Handle duplicate filenames</span>
                <Toggle on dim />
              </div>
            </div>
          </article>

          {/* FILE OPERATIONS */}
          <article className="card">
            <div className="card-head">
              <h3>Made for everyday tasks.</h3>

              <p>
                From compressing documents to converting images,
                get things done without opening multiple tools.
              </p>
            </div>

            <div className="panel">
              <div className="panel-top">
                <b>Available operations</b>
                <span className="chip">6 actions</span>
              </div>

              <div className="msg">
                <div className="msg-head">
                  <Avatar tone="#5b4636" size={18} />
                  <b>ZIP compression</b>
                  <i />
                </div>

                <p>
                  Bundle multiple files into a convenient ZIP archive.
                </p>
              </div>

              <div className="msg">
                <div className="msg-head">
                  <Avatar tone="#c9a27e" size={18} />
                  <b>PDF creation</b>
                  <i />
                </div>

                <p>
                  Turn supported files and images into PDF documents.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="integrations" id="how-it-works">
        <div className="int-grid" />

        <div className="head on-dark">
          <Pill
            icon={
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21c0-5 4-7 8-7s8 2 8 7z" />
              </svg>
            }
          >
            HOW IT WORKS
          </Pill>

          <h2>Three steps. That's it.</h2>

          <p>
            No complicated workflow. Just select, activate and choose.
            <br />
            Tangerine takes care of the operation.
          </p>

          <a className="all-int" href={DOWNLOAD_URL}>
            Get Tangerine for Windows →
          </a>
        </div>

        {/* PRODUCT DEMONSTRATION VIDEO */}
        <div className="how-video">
          <video
            className="how-video-player"
            src="/videos/tangerine-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </section>

      {/* PRODUCT STATEMENT */}
      <section className="testimonial" id="about">
        <span className="qm">&ldquo;</span>

        <blockquote>
          File operations shouldn't require opening several
          applications and navigating through endless menus.
          Select your files, make one gesture, and get on with
          your work.
        </blockquote>

        <div className="by">
          <span className="by-avatars">
            <Avatar
              tone="linear-gradient(135deg,#b07a5a,#5b4636)"
              size={26}
            />
            <span className="mc">T</span>
          </span>

          <b>The idea behind Tangerine</b>
          <small>A simpler way to work with files on Windows</small>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <b>6</b>
          <span>File operations</span>
        </div>

        <div>
          <b>1</b>
          <span>Floating radial menu</span>
        </div>

        <div>
          <b>0</b>
          <span>Original files overwritten</span>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="download">
        <h2>
          Make everyday file tasks
          <br />
          <span className="underline">effortlessly simple.</span>
        </h2>

        <div>
          <a
            className="btn btn-white"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet the Developer
          </a>

          <a
            className="btn btn-lime"
            href={DOWNLOAD_URL}
          >
            Download Tangerine
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="f-main">
          <div className="f-brand">
            <Logo dark />

            <p>
              A simpler way to handle everyday file operations
              on Windows.
            </p>

            <p>
              Built for convenience.
              <br />
              Designed around one gesture.
            </p>
          </div>

          <div className="f-col">
            <b>Product</b>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#download">Download</a>
          </div>

          <div className="f-col">
            <b>File operations</b>
            <a href="#features">ZIP compression</a>
            <a href="#features">PDF creation</a>
            <a href="#features">Image conversion</a>
          </div>

          <div className="f-col">
            <b>Connect</b>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer on LinkedIn
            </a>

            <a href="#top">Back to top</a>
          </div>
        </div>

        <div className="f-bottom">
          <span>
            © 2026 Tangerine. All rights reserved.
          </span>

          <div className="social">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
