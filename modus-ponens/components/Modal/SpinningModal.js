import styles from "./SpinningModal.module.css";

const SpinningModal = () => {
  return (
    <div className="spinner-container">
      <div className={styles.loading-spinner}></div>
    </div>
  );
};

export default SpinningModal;
