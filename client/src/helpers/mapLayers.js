//general cluster
export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'reports',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#fd9d9d', 5, '#ffcb71', 10, '#F87145'],
    'circle-radius': ['step', ['get', 'point_count'], 15, 5, 20, 10, 27]
  }
}

//how many reports?
export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'reports',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
}

//only one report point
export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'reports',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#184f7c',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}