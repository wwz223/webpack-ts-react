// 关于我们

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">关于我们</h1>

      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-600">我们的使命</h2>
        <p className="text-gray-600">
          我们致力于为用户提供最优质的服务，通过技术创新推动行业发展，
          为客户创造更多价值。
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-600">核心团队</h2>
        <div className="flex items-center mb-2 p-2 bg-gray-100 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-2"></div>
          <div>
            <h3 style={{ margin: 0, color: "#333" }}>张三</h3>
            <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>首席技术官</p>
          </div>
        </div>
        <div className="flex items-center mb-2 p-2 bg-gray-100 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-2"></div>
          <div>
            <h3 style={{ margin: 0, color: "#333" }}>李四</h3>
            <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>产品总监</p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold text-blue-600">联系我们</h2>
        <p className="text-gray-600">
          邮箱：contact@example.com
          <br />
          电话：(+86) 123-4567-8900
          <br />
          地址：北京市朝阳区科技园区88号
        </p>
      </section>
    </div>
  );
}
