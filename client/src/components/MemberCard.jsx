import { motion } from "framer-motion";

export default function MemberCard({ member }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md p-4 transition-all duration-300 w-full sm:w-[220px]"
    >
      <img
        src={member.photo || "/placeholder.jpg"}
        alt={member.name}
        className="rounded-full h-24 w-24 object-cover mx-auto mb-3 border-4 border-purple-500"
      />
      <h3 className="text-xl font-bold text-center">{member.name}</h3>
      <p className="text-center text-sm text-gray-500">{member.relation}</p>
      <span className="block text-center text-xs mt-1 text-gray-400">
        {member.side === "paternal" ? "👨 Father’s Side" : "👩 Mother’s Side"}
      </span>
    </motion.div>
  );
}
