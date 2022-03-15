//general cluster
export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'reports',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#ff8e8e', 5, '#ffcb71', 10, '#F87145'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 7, 30, 10, 37]
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
    'circle-color': '#a81878',
    'circle-radius': 6,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}