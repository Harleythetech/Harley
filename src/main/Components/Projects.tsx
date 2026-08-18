import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";
import { projects, type Project } from "../../data/projects";

export default function Projects() {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root }).add(() => {
      // --------------------------------------------------
      // Project entrance animation
      // --------------------------------------------------

      animate(".project-card", {
        opacity: [0, 1],
        translateY: [60, 0],
        scale: [0.96, 1],
        duration: 900,
        delay: stagger(120),
        ease: "out(4)",
      });

      // --------------------------------------------------
      // Project numbers
      // --------------------------------------------------

      animate(".project-number", {
        opacity: [0, 0.5],
        translateX: [-20, 0],
        duration: 700,
        delay: stagger(120, { start: 250 }),
        ease: "out(3)",
      });

      // --------------------------------------------------
      // Ambient background animation
      // --------------------------------------------------

      animate(".project-glow", {
        translateY: [-10, 10],
        translateX: [-5, 5],
        duration: 3200,
        ease: "inOutSine",
        loop: true,
        alternate: true,
      });
    });

    return () => {
      scope.current?.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-24
        sm:px-8
        md:px-8
        lg:px-16
        lg:py-32
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Upper-right cool glow */}

        <div
          className="
            project-glow
            absolute
            -right-40
            top-20
            h-105
            w-105
            rounded-full
            bg-[#17175c]/30
            blur-[130px]
          "
        />

        {/* Lower-left subtle glow */}

        <div
          className="
            project-glow
            absolute
            -left-40
            bottom-10
            h-87.5
            w-87.5
            rounded-full
            bg-white/2.5
            blur-[120px]
          "
        />

        {/* Small central accent */}

        <div
          className="
            absolute
            left-[42%]
            top-[35%]
            h-72
            w-72
            rounded-full
            bg-[#EEFF6B]/[0.018]
            blur-[120px]
          "
        />

        {/* Section gradient */}

        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-transparent
            via-white/[0.006]
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-6

            md:mb-16
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            {/* Section label */}

            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#EEFF6B]/60" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#EEFF6B]/70
                "
              >
                02 / Projects
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Things I've built.
            </h2>
          </div>

          {/* Description */}

          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-white/55

              sm:text-[15px]
              sm:leading-7
            "
          >
            A collection of projects I've worked on across web development,
            automation, infrastructure, and software.
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==============================================================
   PROJECT CARD
============================================================== */

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    animate(cardRef.current, {
      rotateX,
      rotateY,
      scale: 1.015,
      duration: 400,
      ease: "out(3)",
    });

    // --------------------------------------------------
    // Move project image
    // --------------------------------------------------

    const preview = cardRef.current.querySelector(
      ".project-preview"
    ) as HTMLElement | null;

    if (preview) {
      animate(preview, {
        translateX: ((x - centerX) / centerX) * 10,
        translateY: ((y - centerY) / centerY) * 10,
        duration: 500,
        ease: "out(3)",
      });
    }

    // --------------------------------------------------
    // Move image itself slightly more
    // --------------------------------------------------

    const image = cardRef.current.querySelector(
      ".project-image"
    ) as HTMLElement | null;

    if (image) {
      animate(image, {
        scale: 1.045,
        translateX: ((x - centerX) / centerX) * 8,
        translateY: ((y - centerY) / centerY) * 8,
        duration: 600,
        ease: "out(3)",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    animate(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 700,
      ease: "out(4)",
    });

    const preview = cardRef.current.querySelector(
      ".project-preview"
    ) as HTMLElement | null;

    if (preview) {
      animate(preview, {
        translateX: 0,
        translateY: 0,
        duration: 700,
        ease: "out(4)",
      });
    }

    const image = cardRef.current.querySelector(
      ".project-image"
    ) as HTMLElement | null;

    if (image) {
      animate(image, {
        scale: 1,
        translateX: 0,
        translateY: 0,
        duration: 700,
        ease: "out(4)",
      });
    }
  };

  /*
   * We check for an image dynamically.
   *
   * This allows older projects without an image to continue
   * using the fallback preview.
   */
  const projectWithImage = project as Project & {
    image?: string;
  };

  return (
    <a
      ref={cardRef}
      href={project.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        project-card
        group
        relative
        block
        min-h-105
        overflow-hidden
        rounded-3xl
        border
        border-white/8
        bg-white/2.5
        p-5
        opacity-0
        transition-colors
        duration-500

        hover:border-white/15
        hover:bg-white/4

        sm:p-7
        lg:p-8
      "
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* =====================================================
          CURSOR / CARD GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          bg-white/[0.035]
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-white/[0.07]
        "
      />

      {/* =====================================================
          PROJECT META
      ===================================================== */}

      <div className="relative z-10 flex items-start justify-between">
        <span
          className="
            project-number
            text-xs
            font-medium
            tracking-[0.25em]
            text-white/40
          "
        >
          {project.number}
        </span>

        <span className="text-xs text-white/30">
          {project.year}
        </span>
      </div>

      {/* =====================================================
          PROJECT PREVIEW
      ===================================================== */}

      <div
        className="
          relative
          mt-7
          h-52
          overflow-hidden
          rounded-2xl
          border
          border-white/8
          bg-black/30

          sm:mt-8
          sm:h-56
        "
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
      >
        {projectWithImage.image ? (
          <>
            {/* -------------------------------------------------
                Actual project image
            ------------------------------------------------- */}

            <img
              src={projectWithImage.image}
              alt={`${project.title} project preview`}
              className="
                project-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-[filter]
                duration-500
                group-hover:brightness-110
              "
              draggable={false}
            />

            {/* -------------------------------------------------
                Dark overlay
            ------------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/20
                transition-colors
                duration-500
                group-hover:bg-black/10
              "
            />

            {/* -------------------------------------------------
                Top gradient
            ------------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-24
                bg-linear-to-b
                from-black/35
                to-transparent
              "
            />

            {/* -------------------------------------------------
                Bottom gradient
            ------------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-28
                bg-linear-to-t
                from-black/45
                to-transparent
              "
            />

            {/* -------------------------------------------------
                Subtle highlight
            ------------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-linear-to-br
                from-white/6
                via-transparent
                to-transparent
              "
            />
          </>
        ) : (
          /* =================================================
             FALLBACK PREVIEW
          ================================================= */

          <div
            className="
              project-preview
              absolute
              inset-4
              overflow-hidden
              rounded-xl
              border
              border-white/8
              bg-white/2.5
            "
          >
            {/* Browser header */}

            <div
              className="
                flex
                h-8
                items-center
                gap-1.5
                border-b
                border-white/6
                px-3
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>

            {/* Fake UI */}

            <div className="grid grid-cols-[70px_1fr] gap-3 p-3">
              <div className="space-y-2">
                <div className="h-2 rounded bg-white/10" />
                <div className="h-2 w-4/5 rounded bg-white/6" />
                <div className="h-2 w-3/5 rounded bg-white/5" />
                <div className="h-2 w-4/5 rounded bg-white/5" />
              </div>

              <div className="space-y-3">
                <div className="h-12 rounded-lg bg-white/4" />

                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-lg bg-white/[0.035]" />
                  <div className="h-16 rounded-lg bg-white/[0.035]" />
                  <div className="h-16 rounded-lg bg-white/[0.035]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Perspective decoration */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-br
            from-white/4
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <div
        className="relative z-10 mt-7"
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {/* Title */}

        <div className="mb-2 flex items-center gap-3">
          <h3
            className="
              text-xl
              font-medium
              tracking-tight
              text-white

              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          <span
            className="
              text-xs
              text-white/25
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            ↗
          </span>
        </div>

        {/* Description */}

        <p
          className="
            max-w-lg
            text-sm
            leading-6
            text-white/45
          "
        >
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/7
                bg-white/2.5
                px-2.5
                py-1
                text-[10px]
                font-medium
                uppercase
                tracking-wider
                text-white/40
                transition-colors
                duration-300

                group-hover:border-white/12
                group-hover:text-white/55
              "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* =====================================================
          PROJECT TYPE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-7
          text-[10px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/25
        "
      >
        {project.type}
      </div>
    </a>
  );
}