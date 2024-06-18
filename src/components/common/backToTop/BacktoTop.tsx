

// import React, { useEffect, useState } from 'react';

// const BacktoTop = () => {
//   const [showProgress, setShowProgress] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setShowProgress(true);
//       } else {
//         setShowProgress(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setShowProgress(false);
//   };

//   return (
//     <>
//       {showProgress && (
//         <div className="progress-wrap active-progress" onClick={handleScrollToTop}>
//           <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
//             <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
//           </svg>
//         </div>
//       )}
//     </>
//   );
// };
// export default BacktoTop;
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BacktoTop = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);

      if (scrollTop > 50) {
        setShowProgress(true);
      } else {
        setShowProgress(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowProgress(false);
  };

  return (
    <>
      {showProgress && (
        <div className="progress-wrap active-progress" onClick={handleScrollToTop}>
          <CircularProgressbar
            value={scrollPercentage}
            // text={`${Math.round(scrollPercentage)}%`}
            strokeWidth={4}
          />
        </div>
      )}
    </>
  );
};

export default BacktoTop;




