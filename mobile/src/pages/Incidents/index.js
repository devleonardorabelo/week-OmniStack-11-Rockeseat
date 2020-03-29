import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native' //useRoute serve para pegar informações especifica da pagina atual
import api from '../../services/api'

import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {

  const navigation = useNavigation()

  const [ incidents, setIncidents ] = useState([])
  const [ total, setTotal ] = useState(0)
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {
    if(loading) return
    if(total > 0 && incidents.length === total) return
    setLoading(true)

    const response = await api.get('incidents', {
      params: {
        page
      }
    })
    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)

  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>


      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={loadIncidents} //chama a função quando descer a lista de itens
        onEndReachedThreshold={0.2} //chama a função de acordo com a porcentagem do fim da lista
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
              </Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>   
          </View>
        )}
      />
    </View>
  )
}