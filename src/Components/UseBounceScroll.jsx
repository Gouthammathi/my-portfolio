import { useRef, useEffect } from 'react';
export default function UseBounceScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (el.scrollTop === 0) {
          el.style.transition = 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
          el.style.transform = 'translateY(20px)';
          setTimeout(() => (el.style.transform = 'translateY(0)'), 150);
        } else if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
          el.style.transition = 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
          el.style.transform = 'translateY(-20px)';
          setTimeout(() => (el.style.transform = 'translateY(0)'), 150);
        }
        ticking = false;
      });
    };
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);
  return ref;
}