
export default function Dashboard() {

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>仪表盘</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-2xl font-bold text-blue-600">128</div>
          <div className="text-gray-600">今日访问量</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-2xl font-bold text-blue-600">2,456</div>
          <div className="text-gray-600">总用户数</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-2xl font-bold text-blue-600">89%</div>
          <div className="text-gray-600">用户满意度</div>
        </div>
      </div>
    </div>
  );
}