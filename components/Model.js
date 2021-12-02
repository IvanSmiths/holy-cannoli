import '@google/model-viewer';

const Model = () => {
  return (
    <div className="cnt_model">
      <model-viewer
        defer
        id="reveal"
        class="model"
        src="/3d-model-2.glb"
        ios-src="/3d-model.usdz"
        shadow-intensity="0.6"
        poster="/poster.png"
        ar
        camera-controls
        camera-orbit="30.91deg 84.51deg"
        auto-rotate
        auto-rotate-delay="500"
        alt="Modello 3D di un Cannolo"
      ></model-viewer>
    </div>
  );
};

export default Model;
