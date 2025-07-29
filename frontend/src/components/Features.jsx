import { FaTree, FaUserFriends, FaSearch, FaHeart, FaLock, FaPlus } from "react-icons/fa";

const features = [
  { icon: <FaTree />, title: "Interactive Family Tree", desc: "Visualize your family connections..." },
  { icon: <FaUserFriends />, title: "Member Management", desc: "Add, edit, and organize family members..." },
  { icon: <FaSearch />, title: "Smart Search", desc: "Find family members by name, birth year..." },
  { icon: <FaHeart />, title: "Relationship Tracking", desc: "Track complex family relationships..." },
  { icon: <FaLock />, title: "Secure & Private", desc: "Protected with enterprise-grade security..." },
  { icon: <FaPlus />, title: "Easy to Use", desc: "Simple UI to build and maintain your tree..." },
];

const Features = () => (
  <section className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-6">Everything You Need to Build Your Family Tree</h2>
    <p className="text-gray-600 mb-12">Powerful features designed to make family tree creation simple and meaningful.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {features.map((f, idx) => (
        <div key={idx} className="p-6 border rounded-xl shadow-sm hover:shadow-md">
          <div className="text-3xl text-pink-600 mb-4">{f.icon}</div>
          <h3 className="font-semibold text-lg">{f.title}</h3>
          <p className="text-gray-600 mt-2">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Features;
