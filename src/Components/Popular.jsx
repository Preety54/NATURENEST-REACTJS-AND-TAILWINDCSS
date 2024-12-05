import React from 'react'
// import f1 from "../pics/aloevera.webp"

const Popular = () => {
        const plants = [
          {
            id: 1,
            name: 'Aloe Vera',
            image: "https://images.squarespace-cdn.com/content/v1/590e84c6ff7c502e782892f8/1719376659067-JVPRSIZ15UI90ADOFPCL/Aloe+vera+-+Copy.jpg?format=1500w",
            description: 'Known for its healing properties.',
          },
          {
            id: 2,
            name: 'Snake Plant',
            image: 'https://wallpapers.com/images/hd/snake-plant-pictures-1500-x-1001-161dtdcx52fhywfv.jpg',
            description: 'Great for improving air quality.',
          },
          {
            id: 3,
            name: 'Peace Lily',
            image: 'https://i.pinimg.com/originals/bd/09/7d/bd097d857d2c029f83b50324d2ad8cca.jpg',
            description: 'A perfect blend of beauty and purification.',
          },
          {
            id: 4,
            name: 'Monstera',
            image: 'https://image.floranext.com/instances/phoebesgardenandgifts_com/catalog/product/y/o/your_paragraph_text_14__654e9b24f2bbf.png.webp?h=700&w=700&r=255&g=255&b=255',
            description: 'Iconic for its unique leaf patterns.',
          },
          {
            id: 5,
            name: 'Lavender',
            image: 'https://img.freepik.com/premium-photo/vase-lavender-flowers-sits-table-with-purple-background_1090087-89211.jpg',
            description: 'Lavender: Adds a soothing scent and a splash of purple',
          },

          {
            id: 6,
            name: 'Jasmine',
            image: 'https://img.freepik.com/premium-photo/beautiful-white-flowers-vase_974629-197896.jpg',
            description: 'Jasmine: Known for its fragrant flowers, ideal for a sunny window.',
          },
          {
            id: 7,
            name: 'Echeveria',
            image: 'https://img.freepik.com/premium-photo/colorful-echeveria-succulents-growing-ceramic-pots_641010-72729.jpg',
            description: 'A stunning rosette-shaped succulent that comes in various colors.',
          },
          {
            id: 8,
            name: 'Orchids',
            image: 'https://media.bunches.co.uk/products/fool-1.jpg',
            description: '"Delicate yet enduring, these blooms grace your space with timeless elegance."',
          }


        ];
  return (
    <div className="bg-gray-100 py-10">
    <h2 className="text-center text-4xl font-serif font-semibold italic text-green-700 mb-8">
      Popular Plants
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
      {plants.map((plant) => (
        <div
          key={plant.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
        >
          <img src={plant.image} alt={plant.name} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-green-800">{plant.name}</h3>
            <p className="text-gray-600 mt-2">{plant.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Popular
