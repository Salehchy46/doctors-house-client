import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import slot1 from '../../assets/appointment/slot1.png';
import slot2 from '../../assets/appointment/slot2.png';
import slot3 from '../../assets/appointment/slot3.png';
import slot4 from '../../assets/appointment/slot4.png';
import slot5 from '../../assets/appointment/slot5.png';

interface SlotData {
  id: string;
  image: string;
  title: string;
  time: string;
  modalTitle: string;
  date: string;
  hasBackground?: boolean;
}

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
}

const Slots: React.FC = () => {
  const slotData: SlotData[] = [
    {
      id: '1',
      image: slot1,
      title: 'Teeth Orthodontics',
      time: '8:00 AM - 9:00 AM',
      modalTitle: 'Cavity Protection',
      date: 'April 30, 2020'
    },
    {
      id: '2',
      image: slot2,
      title: 'Cosmetic Dentistry',
      time: '10:05 AM - 11:30 AM',
      modalTitle: 'Cavity Protection',
      date: 'April 30, 2020'
    },
    {
      id: '3',
      image: slot3,
      title: 'Teeth Cleaning',
      time: '8:00 AM - 9:00 AM',
      modalTitle: 'Cavity Protection',
      date: 'April 30, 2020',
      hasBackground: true
    },
    {
      id: '4',
      image: slot4,
      title: 'Teeth Orthodontics',
      time: '8:00 AM - 9:00 AM',
      modalTitle: 'Cavity Protection',
      date: 'April 30, 2020',
      hasBackground: true
    },
    {
      id: '5',
      image: slot5,
      title: 'Teeth Orthodontics',
      time: '8:00 AM - 9:00 AM',
      modalTitle: 'Cavity Protection',
      date: 'April 30, 2020',
      hasBackground: true
    }
  ];

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: ''
  });

  const openModal = (id: string) => {
    const dialog = document.getElementById(`modal_${id}`) as HTMLDialogElement | null;
    dialog?.showModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent, slotId: string) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted for slot:', slotId, formData);
    // Reset form
    setFormData({ fullName: '', mobile: '', email: '' });
    // Close modal
    const dialog = document.getElementById(`modal_${slotId}`) as HTMLDialogElement | null;
    dialog?.close();
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-[40px] font-bold text-center text-black py-10">
        Available slots for Teeth Orthodontics.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-5">
        {slotData.map((slot) => (
          <SlotCard
            key={slot.id}
            slot={slot}
            openModal={openModal}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
    </div>
  );
};

interface SlotCardProps {
  slot: SlotData;
  openModal: (id: string) => void;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent, slotId: string) => void;
}

const SlotCard: React.FC<SlotCardProps> = ({
  slot,
  openModal,
  formData,
  handleInputChange,
  handleSubmit
}) => {
  return (
    <div className="card text-black shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={slot.image}
          alt={slot.title}
          className={slot.hasBackground ? "p-8 rounded-full bg-pink-50" : ""}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[25px] font-bold">{slot.title}</h2>
        <p className="font-semibold">{slot.time}</p>
        <div className="card-actions">
          <button
            onClick={() => openModal(slot.id)}
            className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]"
          >
            Book Appointment
          </button>

          {/* Modal */}
          <dialog id={`modal_${slot.id}`} className="modal">
            <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
              <div className="flex pb-8 justify-between items-center">
                <h3 className="font-bold text-lg">{slot.modalTitle}</h3>
                <form method="dialog">
                  <button>
                    <MdCancel className="font-bold text-3xl text-teal-950" />
                  </button>
                </form>
              </div>

              <form onSubmit={(e) => handleSubmit(e, slot.id)}>
                <input
                  className="input bg-gray-100 w-[430px] font-bold"
                  placeholder={slot.date}
                  readOnly
                />
                <input
                  className="input bg-gray-100 w-[430px] my-4 font-bold"
                  placeholder={slot.time}
                  readOnly
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input bg-white border border-gray-300 w-[430px]"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="input bg-white border border-gray-300 w-[430px] my-4"
                  placeholder="Mobile"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input bg-white border border-gray-300 w-[430px] mb-4"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  className="btn w-[430px] bg-teal-950 py-2 text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Slots;