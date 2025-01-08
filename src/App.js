import './App.css';
import { motion } from "framer-motion";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

import { useCursor } from './Components/Context/CustomCursor'; // Import the useCursor hook

function App() {
  const { cursorVariant, variants } = useCursor(); // Access cursor state and variants
 

  return (
    <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // className="bg-gradient-t0-br from-gray-100 to-gray-900 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <Footer />
      </main>
      
      {/* Render the custom cursor */}
      <motion.div
        className="cursor" // Custom cursor class
        variants={variants} // Use the variants from the context
        animate={cursorVariant} // Control the cursor's animation state
        transition={{duration: 0.1}}
      />
    </motion.div>
    </div>
  );
}

export default App;
