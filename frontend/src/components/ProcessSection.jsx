import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TerminalBox = ({ lines }) => (
  <div className="w-full rounded-xl border border-borderColor bg-coprimary p-5 font-mono-code text-sm leading-relaxed text-left">
    {lines.map((line, i) => (
      <div key={i} className={i === 0 ? 'text-primary' : 'text-muted'}>
        {line}
      </div>
    ))}
  </div>
);

const phases = [
  {
    phase: 'PHASE 01',
    title: 'Architectural Discovery',
    text: 'We map your operational vectors and technical constraints to establish a robust foundation for the system architecture.',
    node: <span className="font-mono-code font-bold text-lg">A</span>,
    terminal: ['> init_discovery_protocol()', '[OK] Constraints mapped', '[OK] Vectors aligned'],
    side: 'left', // text on left, terminal on right (desktop)
  },
  {
    phase: 'PHASE 02',
    title: 'Structural Blueprinting',
    text: 'Translating requirements into high-fidelity component schemas and data flow matrices prior to active execution.',
    node: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M4 16l4-6 4 4 4-8 4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    terminal: ['> generate_schema()', 'Compiling... [Done]'],
    side: 'right', // terminal on left, text on right (desktop)
  },
  {
    phase: 'PHASE 03',
    title: 'Execution & Integration',
    text: 'Rapid deployment of monolithic or micro-services architecture, adhering strictly to the approved blueprint.',
    node: <span className="font-mono-code font-bold text-base">{'>_'}</span>,
    terminal: ['> deploy_services()', 'Integrating APIs... [OK]'],
    side: 'left',
  },
  {
    phase: 'PHASE 04',
    title: 'Final Launch',
    text: 'System telemetry activation, final security audits, and transitioning to a live operational state.',
    node: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2c2.5 2.2 4 5.4 4 9 0 2-.6 3.7-1.4 5H9.4C8.6 14.7 8 13 8 11c0-3.6 1.5-6.8 4-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="1.4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 16l-2 4M15 16l2 4M10.5 19h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    terminal: ['> sys.launch()', 'Status: OPERATIONAL'],
    side: 'right',
  },
];

const ProcessSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="relative section-x section-pt mb-4">
      <div className="text-center md:text-left" data-aos="fade-up">
        <span className="font-mono-code text-primary text-sm tracking-[3px] uppercase">Our Process</span>
        <h2 className="text-text text-3xl md:text-5xl font-bold mt-3 mb-16 max-w-2xl mx-auto md:mx-0">
          How a project moves through ShiftCode
        </h2>
      </div>

      <div className="relative">
        {/* Vertical connector line — desktop: centered; mobile: left-aligned with nodes */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px border-l border-dashed border-borderColor md:-translate-x-1/2" aria-hidden="true"></div>

        {/* Increased gap between phases — all spacing now lives on this
            single flex container so it stays even between every row,
            including the last one. */}
        <div className="flex flex-col gap-20 md:gap-32">
          {phases.map((p, i) => {
            const textBlock = (
              <div className="text-center md:text-left">
                <span className="font-mono-code text-primary text-xs tracking-[3px] uppercase">{p.phase}</span>
                <h3 className="text-text text-xl md:text-2xl font-bold mt-2 mb-2">{p.title}</h3>
                <p className="text-muted text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">{p.text}</p>
              </div>
            );
            const terminalBlock = <TerminalBox lines={p.terminal} />;

            return (
              <div
                key={p.phase}
                className="relative pl-16 md:pl-0"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                {/* Node — vertically centered on the connector line, relative
                    to this row's own content height, so it always sits
                    between the left and right columns regardless of the
                    gap between phases. */}
                <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="w-11 h-11 rounded-lg border-2 border-primary bg-background text-primary flex items-center justify-center shrink-0">
                    {p.node}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
                  <div className="md:pr-6">{p.side === 'left' ? textBlock : terminalBlock}</div>
                  <div className="md:pl-6">{p.side === 'left' ? terminalBlock : textBlock}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
