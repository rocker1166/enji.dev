import {
  LazyMotion,
  MotionConfig as MotionProvider,
} from 'framer-motion';

const loadFeatures = () =>
  import('framer-motion').then((mod) => mod.domAnimation);

interface FramerMotionProviderProps {
  children: JSX.Element;
}

function FramerMotionProvider({ children }: FramerMotionProviderProps) {
  return (
    <MotionProvider reducedMotion="user">
      <LazyMotion strict features={loadFeatures}>
        {children}
      </LazyMotion>
    </MotionProvider>
  );
}

export default FramerMotionProvider;
