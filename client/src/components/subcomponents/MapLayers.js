// import React from 'react'
// import { LayerProps } from 'react-map-gl'

export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'reports',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#E06C9F', 10, '#f1f075', 50, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
}

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

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'reports',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#C47335',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}