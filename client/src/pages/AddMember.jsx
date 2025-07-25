import { motion } from "framer-motion";

export default function AddMemberModal({ onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-2xl p-8 shadow-xl w-[90%] max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Add Family Member</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="input-style" required />
          <input type="text" name="relation" placeholder="Relation (e.g. Father, Cousin)" className="input-style" required />
          <select name="side" className="input-style" required>
            <option value="">Select Side</option>
            <option value="paternal">Paternal</option>
            <option value="maternal">Maternal</option>
          </select>
          <input type="file" name="photo" className="input-style" accept="image/*" required />

          <div className="flex justify-end gap-4 pt-2">
            <button type="button" onClick={onClose} className="text-gray-500">Cancel</button>
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg">Add</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
