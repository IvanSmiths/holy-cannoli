import '@google/model-viewer';

const Model = () => {
  return (
    <div className="cnt_model">
      <model-viewer
        id="reveal"
        class="model"
        src="/3d-model.glb"
        ios-src=""
        ar
        camera-controls
        auto-rotate
        auto-rotate-delay="500"
        alt="Modello 3D di un Cannolo"
      ></model-viewer>
    </div>
  );
};

export default Model;
