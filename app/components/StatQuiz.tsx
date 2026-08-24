'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

const COLS = 20;
const ROWS = 14;
const CELL = 30;
const W = COLS * CELL;
const H = ROWS * CELL;
const SPEED = 145;

type Pos = { x: number; y: number };

const INIT_SNAKE: Pos[] = [
  { x: 10, y: 7 }, { x: 9, y: 7 }, { x: 8, y: 7 },
];

function randFood(snake: Pos[]): Pos {
  let p: Pos;
  do {
    p = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (snake.some((s) => s.x === p.x && s.y === p.y));
  return p;
}

type Phase = 'idle' | 'playing' | 'dead';

const KEY_MAP: Record<string, Pos> = {
  ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 },
};

export default function StatQuiz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef<Pos[]>([...INIT_SNAKE]);
  const dirRef = useRef<Pos>({ x: 1, y: 0 });
  const nextDirRef = useRef<Pos>({ x: 1, y: 0 });
  const foodRef = useRef<Pos>({ x: 15, y: 7 });
  const scoreRef = useRef(0);
  const bestRef = useRef(0);
  const phaseRef = useRef<Phase>('idle');

  const [phase, setPhase] = useState<Phase>('idle');
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = '#ebebeb';
    ctx.lineWidth = 0.5;
    for (let x = 1; x < COLS; x++) {
      ctx.beginPath(); ctx.moveTo(x * CELL, 0); ctx.lineTo(x * CELL, H); ctx.stroke();
    }
    for (let y = 1; y < ROWS; y++) {
      ctx.beginPath(); ctx.moveTo(0, y * CELL); ctx.lineTo(W, y * CELL); ctx.stroke();
    }

    const food = foodRef.current;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL * 0.2, 0, Math.PI * 2);
    ctx.fill();

    const snake = snakeRef.current;
    const m = 3;
    for (let i = snake.length - 1; i >= 0; i--) {
      const s = snake[i];
      ctx.fillStyle = i === 0 ? '#000' : '#444';
      ctx.fillRect(s.x * CELL + m, s.y * CELL + m, CELL - m * 2, CELL - m * 2);
    }
  }, []);

  const restart = useCallback(() => {
    const init = [{ x: 10, y: 7 }, { x: 9, y: 7 }, { x: 8, y: 7 }];
    snakeRef.current = init;
    dirRef.current = { x: 1, y: 0 };
    nextDirRef.current = { x: 1, y: 0 };
    foodRef.current = randFood(init);
    scoreRef.current = 0;
    phaseRef.current = 'playing';
    setPhase('playing');
    setScore(0);
    draw();
  }, [draw]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      if (phaseRef.current !== 'playing') return;
      const d = nextDirRef.current;
      dirRef.current = d;
      const prev = snakeRef.current;
      const head = { x: prev[0].x + d.x, y: prev[0].y + d.y };

      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS
        || prev.some((s) => s.x === head.x && s.y === head.y)) {
        bestRef.current = Math.max(bestRef.current, scoreRef.current);
        phaseRef.current = 'dead';
        setPhase('dead');
        setBest(bestRef.current);
        draw();
        return;
      }

      const ate = head.x === foodRef.current.x && head.y === foodRef.current.y;
      const newSnake = ate ? [head, ...prev] : [head, ...prev.slice(0, -1)];
      snakeRef.current = newSnake;
      if (ate) {
        scoreRef.current += 1;
        foodRef.current = randFood(newSnake);
        setScore(scoreRef.current);
      }
      draw();
    }, SPEED);
    return () => clearInterval(id);
  }, [phase, draw]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const d = KEY_MAP[e.key];
      if (!d) return;
      e.preventDefault();
      const cur = dirRef.current;
      if (d.x !== -cur.x || d.y !== -cur.y) nextDirRef.current = d;
      if (phaseRef.current !== 'playing') restart();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [restart]);

  function pushDir(d: Pos) {
    const cur = dirRef.current;
    if (d.x !== -cur.x || d.y !== -cur.y) nextDirRef.current = d;
    if (phaseRef.current !== 'playing') restart();
  }

  return (
    <section id="game" style={{ padding: '6rem 2rem', borderBottom: '2px solid #000' }}>
      <div style={{ marginBottom: '3rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '2rem', flexWrap: 'wrap' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          BREAK
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          take a minute · arrow keys or wasd
        </div>
      </div>

      <div style={{ display: 'flex', gap: '3rem', marginBottom: '1.25rem' }}>
        {[{ label: 'Score', val: score }, { label: 'Best', val: best }].map(({ label, val }) => (
          <div key={label}>
            <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '2px' }}>{label}</div>
            <div className="font-display" style={{ fontSize: '2.5rem', lineHeight: 1 }}>{val}</div>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: `${W}px`, position: 'relative', border: '2px solid #000' }}>
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {phase !== 'playing' && (
          <div
            onClick={restart}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(255,255,255,0.93)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '0.75rem', cursor: 'pointer',
            }}
          >
            <div className="font-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1, textAlign: 'center' }}>
              {phase === 'dead' ? `SCORE: ${score}` : 'SNAKE'}
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#777', textAlign: 'center' }}>
              {phase === 'dead' ? 'click or press any arrow to restart' : 'click or press any arrow to start'}
            </div>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '1.25rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 52px)',
        gridTemplateRows: 'repeat(2, 52px)',
        gap: '4px',
        width: 'fit-content',
      }}>
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          <Btn label="↑" onClick={() => pushDir({ x: 0, y: -1 })} />
        </div>
        <div style={{ gridColumn: 1, gridRow: 2 }}>
          <Btn label="←" onClick={() => pushDir({ x: -1, y: 0 })} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 2 }}>
          <Btn label="↓" onClick={() => pushDir({ x: 0, y: 1 })} />
        </div>
        <div style={{ gridColumn: 3, gridRow: 2 }}>
          <Btn label="→" onClick={() => pushDir({ x: 1, y: 0 })} />
        </div>
      </div>
    </section>
  );
}

function Btn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '52px', height: '52px',
        border: '2px solid #000',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
    >
      {label}
    </button>
  );
}
