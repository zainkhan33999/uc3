"use client"
import { useState, useEffect } from 'react';
import styles from './Loading.module.css'; // or your preferred styling method

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for page to fully render
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingSpinner}>
        {/* Your loading animation here */}
       
      </div>
    </div>
  );
}