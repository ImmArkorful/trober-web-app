import Modal from 'react-modal';

interface ModalProps {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
  customStyles: object;
}

const SuccessModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
}: ModalProps) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-screen h-screen text-center lg:p-28 p-14">
          <p className="mt-64 text-3xl font-normal lg:text-5xl text-textblue lg:mt-96">
            Thank you!
          </p>
          <p className="pt-12 text-sm font-normal lg:text-xl">
            We have received your details and will <br /> get back to you
            shortly
          </p>
          <button
            onClick={closeModal}
            className="self-center px-10 py-2 mt-10 text-white rounded-lg shadow-xl md:py-4 md:px-16 bg-gradient-to-r from-gradientstart to-gradientend"
            type="submit"
            value="Submit"
          >
            Back to trober
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SuccessModal;
