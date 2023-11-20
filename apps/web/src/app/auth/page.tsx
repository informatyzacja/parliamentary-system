import { StudentsUnionIcon } from '@/icons/StudentsUnionIcon';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between px-24">
      <div className="flex flex-col justify-center items-center gap-16">
        <div>
          <StudentsUnionIcon size={256} />
        </div>
        <div className="flex flex-col text-5xl lg:text-7xl font-[900] text-gray-700">
          <span>System</span>
          <span>Parlamentarny</span>
        </div>
      </div>
      <div>
        Zaloguj używając USOS
      </div>
    </main>
  );
}
