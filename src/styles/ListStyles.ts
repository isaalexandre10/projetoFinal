import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },

  searchContainer: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,

    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#111827',
  },

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  cardTitleContainer: {
    flex: 1,
    paddingRight: 12,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },

  cardDescription: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 19,
    marginTop: 8,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeActive: {
    backgroundColor: '#DCFCE7',
  },

  badgeInactive: {
    backgroundColor: '#FEE2E2',
  },

  badgePending: {
    backgroundColor: '#FEF3C7',
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },

  badgeTextActive: {
    color: '#15803D',
  },

  badgeTextInactive: {
    color: '#B91C1C',
  },

  badgeTextPending: {
    color: '#B45309',
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,

    marginTop: 16,
    paddingTop: 12,

    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },

  editButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
  },

  editButtonText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '600',
  },

  deleteButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
  },

  deleteButtonText: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '600',
  },

  emptyContainer: {
    flex: 1,
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
  },

  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
});